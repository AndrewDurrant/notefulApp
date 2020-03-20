import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Note.css'
import NotefulContext from '../../NotefulContext'


export class Note extends Component {
  static contextType = NotefulContext;

  render() {
    let context = this.context;
    const { history, name, id } = this.props;

    return (
      <div className="noteCard">
        <h2 
          onClick={() => {
            history.push('/note/'+ id)
          }}
          className="noteCardTitle">{name}</h2>
        <Link to='/'>
          <button 
            className="deleteCardBtn"
            onClick={() => context.deleteNote(id)}>
            Delete
          </button>
        </Link>
      </div>
    )
  }
}

export default Note
