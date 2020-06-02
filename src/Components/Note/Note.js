import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Note.css';
import NotefulContext from '../../NotefulContext';
import PropTypes from 'prop-types';


export class Note extends Component {
  static contextType = NotefulContext;

  render() {
    let context = this.context;
    const { history, name, id } = this.props;

    return (
      <article className="noteCard">
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
    </article>
    )
  }
}

Note.propTypes = {
  history: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.string
}

export default Note
