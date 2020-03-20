import React, { Component } from 'react';
import Note from '../Note/Note';
import './NoteList.css';
import NotefulContext from '../../NotefulContext'

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
        <Note
          id={note.id}
          name={note.name}
          folderId={note.folderId}
          key={note.id}
          history={this.props.history}
          />
      )
    })

    return(
      <main className="notes">
        <div className="noteCardContainer">
          { allNotes}
          <button className="addCardBtn">
            Add Note
          </button>
        </div>
      </main>
    )
  }
}

export default NoteList;
