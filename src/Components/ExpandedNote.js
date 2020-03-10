import React, {Component} from 'react'

function ExpandedNote(props){
    return(
        <div>{props.note.content}</div>
    )
}

export default ExpandedNote;