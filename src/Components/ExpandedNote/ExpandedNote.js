import React from 'react'
import Note from '../Note/Note'

function ExpandedNote(props){

  return(
    <section>
      <Note 
        note={props.note}
        history={props.history}
      />
      <article>{props.note.content}</article>
    </section>
  )
}

export default ExpandedNote;