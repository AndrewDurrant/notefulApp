import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteList.css';

import Note from '../Note/Note';
import NotefulContext from '../../NotefulContext'
import NoteError from '../ErrorBoundaries/NoteError';
// import AddNote from '../AddNote/AddNote'

export class NoteList extends Component { 
  static contextType = NotefulContext;

  render() {
    let { notes } = this.context;
    
    let filteredNotes;

    if (this.props.match.params.folderId) {
      // filters for only notes in folder
      filteredNotes = notes.filter(note => note.folder_id === parseInt(this.props.match.params.folderId));
    } else {
      // returns all notes
      filteredNotes = notes;
    }

    // maps over designated notes
    const allNotes = filteredNotes.map(note => {
      return(
        <NoteError key={note.id}>
          <Note
            note={note} 
            history={this.props.history}
          />
        </NoteError>
      )
    })

    return(
      <main className="notes">
        <section className="noteCardContainer">
          { allNotes }
          <Link to='/addNote'>
            <button className="addCardBtn">
              Add Note
            </button>
          </Link>
        </section>
      </main>
    )
  }
}


export default NoteList;
