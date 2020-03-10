import React, {Component} from 'react'

function ExpandedNote(props){
    return(
        <section>
            <Note name={props.note.name}/>
            <div>{props.note.content}</div>

            <button>Go Back</button>
            <span></span>
        </section>
    )
}

export default ExpandedNote;