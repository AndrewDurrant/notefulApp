import React, { Component } from 'react'
import './Note.css'

export class Note extends Component {
  render() {
    return (
      <div 
        className="noteCard"
        onClick={() => {
        this.props.history.push('/note/'+this.props.id)
        }}>
        <h2 className="noteCardTitle">{this.props.name}</h2>
        <button className="deleteCardBtn">Delete Note</button>
      </div>
    )
  }
}

export default Note
