import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import FolderList from './Components/FolderList/FolderList';
import NoteList from './Components/NoteList/NoteList';
import ExpandedView from './Components/ExpandedView/ExpandedView';
import NotefulContext from './NotefulContext';
import './App.css';


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

    fetch('http://localhost:9090/notes')
      .then(response => response.json())
      .then(data => {
        this.setState({
          "notes": data
        })
    })
  }
  
  handleDelete = (noteId) => {
    console.log('delete')
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

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      addNote: this.addNote,
      deleteNote: this.handleDelete
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
            render={(props) => (
              <ExpandedView {...props}/>
            )}
          />
        </main>
        </>
      </NotefulContext.Provider>
    );
  }
}

export default App;