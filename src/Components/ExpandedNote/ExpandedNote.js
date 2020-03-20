import React from 'react'
import Note from '../Note/Note'

function ExpandedNote(props){

  return(
    <section>
      <Note 
        id={props.note.id}
        folderId={props.note.folderId}
        history={props.history}
        name={props.note.name}/>
      <div>{props.note.content}</div>
    </section>
  )
}

export default ExpandedNote;