import React, { Component } from 'react';
import Note from '../Note/Note';
import './NoteList.css';

export class NoteList extends Component {
  render() {
      const allNotes=this.props.notes.map(note=>{
        return(
          <Note
          folder-id={note.folderId}
          key={note.id}
          id={note.id}
          name={note.name}
          content={note.content}
          history={this.props.history}
          />
        )
      })

      return(
        <main className="notes">
          <div className="noteCardContainer">
            { allNotes}
            <button className="addCardBtn">Add Note</button>
          </div>
        </main>
    )
  }
}

export default NoteList;
