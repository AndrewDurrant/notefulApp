import React from 'react'
import Note from '../Note/Note'

function ExpandedNote(props){
    return(
        <section>
            <Note name={props.note.name}/>
            <div>{props.note.content}</div>
        </section>
    )
}

export default ExpandedNote;