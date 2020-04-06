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
    let context = this.context;
    let filteredNotes;

    if (this.props.match.params.folderId) {
      // filters for only notes in folder
      filteredNotes = context.notes.filter(note => note.folderId === this.props.match.params.folderId);
    } else {
      // returns all notes
      filteredNotes = context.notes;
    }

    // maps over designated notes
    const allNotes = filteredNotes.map(note => {
      return(
        <NoteError>
          <Note
            id={note.id}
            name={note.name}
            folderId={note.folderId}
            key={note.id}
            history={this.props.history}
          />
        </NoteError>
      )
    })

    return(
      <main className="notes">
        <div className="noteCardContainer">
          { allNotes }
          <Link to='/addNote'>
            <button className="addCardBtn">
              Add Note
            </button>
          </Link>
        </div>
      </main>
    )
  }
}


export default NoteList;
