import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
    fetch('http://localhost:9090/folders')
      .then(response => response.json())
      .then(data => {
        this.setState({
          "folders": data
        })
      })
      .catch(err => {
        this.setState({
          error: err
        })
      })

    fetch('http://localhost:9090/notes')
      .then(response => response.json())
      .then(data => {
        this.setState({
          "notes": data
        })
      })
      .catch(err => {
        this.setState({
          error: err
        })
      })
  }

  handleAddFolder = (folder) => {    
    return fetch('http://localhost:9090/folders',
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
      console.log('Success:', data);
    })
    .catch(err => {
      this.setState({ 
        error: err
      })
    })
  }

  handleAddNote = (note) => {
    return fetch('http://localhost:9090/notes',
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
      console.log('Success:', data);
    })
    .catch(err => {
      this.setState({ 
        error: err
      })
    })
  }

  handleDelete = (noteId) => {
    fetch(`http://localhost:9090/notes/${noteId}`, {
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
c
  updateNoteData = (note) => {
    this.setState({
      notes: [...this.state.notes, note]
    })
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
      updateNotes: this.updateNoteData
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
          <ErrorBoundary>
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
          </ErrorBoundary>

          {/* renders just the notes for picked folder */}
          <ErrorBoundary>
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
          </ErrorBoundary>

          {/* renders expanded note view */}
          <ErrorBoundary>
            <Route 
              exact 
              path="/note/:noteId"
              render={(props) => (
                <ExpandedView {...props}/>
              )}
            />
          </ErrorBoundary>

          {/* renders addFolder view */}
          <ErrorBoundary>
            <Route
              exact
              path="/addFolder"
              render={(props) => (
                <AddFolder {...props} />
              )}
            />
          </ErrorBoundary>

          {/* renders addNote view */}
          <ErrorBoundary>
            <Route
              exact
              path="/addNote"
              render={(props) => (
                <AddNote {...props} />
              )}
            />
          </ErrorBoundary>

        </main>
        </>
      </NotefulContext.Provider>
    );
  }
}

export default App;