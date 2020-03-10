import React, { Component } from 'react';
import Note from './Note';

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
          />

          
        )

      })
      return(
        <main className="notes">
        NoteList
      <div>
        { allNotes}
        <button>Add Note</button>
      </div>
      </main>
    )
    
}}

export default NoteList;
