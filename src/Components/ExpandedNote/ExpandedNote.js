import React from 'react'
import Note from '../Note/Note'

function ExpandedNote(props){

  return(
    <section>
      <Note 
        id={props.note.id}
        folderId={props.note.folderid}
        history={props.history}
        name={props.note.note_name}/>
      <article>{props.note.content}</article>
    </section>
  )
}

export default ExpandedNote;