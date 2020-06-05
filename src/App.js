import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import FolderList from './Components/FolderList/FolderList';
import NoteList from './Components/NoteList/NoteList';
import ExpandedView from './Components/ExpandedView/ExpandedView';
import NotefulContext from './NotefulContext';
import AddFolder from './Components/AddFolder/AddFolder';
import AddNote from './Components/AddNote/AddNote';
import ErrorBoundary from './Components/ErrorBoundaries/ErrorBoundary';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
      error: null,
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/folders')
      .then(response => response.json())
      .then(data => {        
        this.setState({
          folders: data,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: err
        })
      })

    fetch('http://localhost:8000/api/notes')
      .then(response => response.json())
      .then(data => {
        this.setState({
          "notes": data,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: err
        })
      })
  }

  handleAddFolder = (folder) => {    
    return fetch('http://localhost:8000/api/folders',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(folder)
    }
    )
    .then((response) => response.json())
    .then((data) => {
      console.log(`added ${data}`)
    })
    .catch(err => {
      this.setState({ 
        error: err
      })
    })
  }

  handleAddNote = (note) => {
    return fetch('http://localhost:8000/api/notes',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(note)
    }
    )
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        notes: [...this.state.notes, data],
        error: null
      })
    })
    .catch(err => {
      this.setState({ 
        error: err
      })
    })
  }

  handleDelete = (noteId) => {
    fetch(`http://localhost:8000/api/notes/${noteId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
    })
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  };

  updateFolderData = (folder) => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  updateNoteData = (note) => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }

  findNote = (noteId) => {
    console.log(typeof noteId, this.state.notes)
    const val = this.state.notes.find((note) => note.id === parseInt(noteId))
    console.log(val);
    return val;
    
  }

  findFolder = (folderId) => {
    return this.state.folders.find((folder) => folder.id === folderId)
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      error: this.state.error,
      addNote: this.handleAddNote,
      deleteNote: this.handleDelete, 
      addFolder: this.handleAddFolder,
      updateFolders: this.updateFolderData,
      updateNotes: this.updateNoteData,
      findNote: this.findNote,
      findFolder: this.findFolder
    }

    return (
      <NotefulContext.Provider value={contextValue}>
        <>
        {/* This is the header */}
        <header>
          <Link 
            className="homeLink"
            to='/'>
            <h1 className="appName">
              Noteful
            </h1>
          </Link>
        </header>
        <main className="main-container">
          {/* renders main page */}
          <Switch>
            <Route 
              exact 
              path="/"
              render={props =>
                <>
                  <NoteList {...props}/>
                  <FolderList {...props}/>
                </>
              }
            />
          {/* renders just the notes for picked folder */}
            <Route
              exact
              path="/folder/:folderId"
              render={props => (
                <>
                  <NoteList {...props} />
                  <FolderList {...props} />
                </>
              )}
            />
          {/* renders expanded note view */}
            <Route 
              exact 
              path="/note/:noteId"
              component={ExpandedView}
            />
          {/* renders addFolder view */}
            <Route
              exact
              path="/addFolder"
              component={AddFolder}
            />
          {/* renders addNote view */}
            <Route
              exact
              path="/addNote"
              component={AddNote}
            />
          </Switch>
        </main>
        </>
      </NotefulContext.Provider>
    );
  }
}

export default App;