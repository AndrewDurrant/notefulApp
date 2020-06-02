import React, { Component } from 'react';
import cuid from 'cuid';
import ValidationError from '../../ValidationError';
import NotefulContext from '../../NotefulContext';
import './AddNote.css'
import { Link } from 'react-router-dom';


export class AddNote extends Component {
  static contextType = NotefulContext;

  constructor(props) {
    super(props);
    this.state = {
      noteName: {
        value: '',
        touched: false
      },
      noteContent: {
        value: '',
        touched: false
      },
      folderId: {
        value: '',
        touched: false
      }
    }
  }

  handleChange(folder) {
    this.setState({
      folderId: {
        value: folder,
        touched: true
      }
    });
  }

  updateNoteName(name) {
    this.setState({
      noteName: {
        value: name,
        touched: true
      }
    });
  }

  updateNoteContent(content) {
    this.setState({
      noteContent: {
        value: content,
        touched: true
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { noteName, noteContent, folderId } = this.state;
    const note = {
      id: cuid(),
      folderId: folderId.value,
      name: noteName.value,
      content: noteContent.value
    }
    this.context.addNote(note)
      .then(() => {
        // add note
        this.context.updateNotes(note)
        this.props.history.push('/')
      })
  }

  validateNoteName() {
    const noteName = this.state.noteName.value.trim();
    if(noteName.length === 0) {
      return 'Note name is required';
    } else if(noteName.length < 3) {
      return 'Note name must be at least 3 characters long'
    }
  }

  validateNoteContent() {
    const noteContent = this.state.noteContent.value.trim();
    if(noteContent.length === 0) {
      return 'Note content is required';
    } else if(noteContent.length < 3) {
      return 'Note content must be at least 7 characters long'
    }
  }

  render() {
    const noteNameError = this.validateNoteName();
    const noteContentError = this.validateNoteContent();

    return(
      <form className="addNote" onSubmit={e => this.handleSubmit(e)}>
        <h2>Add Note</h2>
        <span>* required field</span>
        <section>
          <label htmlFor="noteName">Note Name *</label>
          <input 
            type="text"
            name="noteName"
            id="noteName"
            onChange={e => this.updateNoteName(e.target.value)}
          />
          {this.state.noteName.touched && (
            <ValidationError message={noteNameError} />
          )}
        </section>

        <section>
          <label htmlFor="noteContent">Note Content *</label>
          <textarea 
            type="text"
            name="noteContent"
            id="noteContent"
            placeholder="Note it up!"
            cols="66"
            rows="3"
            onChange={e => this.updateNoteContent(e.target.value)}
          />
          {this.state.noteContent.touched && (
            <ValidationError message={noteContentError} />
          )}
        </section>

        <section>
          <label htmlFor="folderId">Folder Association</label>
          <select 
            name="folderId" 
            id="folderId" 
            value={this.state.value} 
            onChange={e => this.handleChange(e.target.value)}
          >
            {this.context.folders.map(folder =>
              <option value={folder.id} key={folder.id}>{folder.name}</option>
            )}
          </select>
        </section>

        <section className="addNote__button__group">
          <Link to='/'>
            <button type="reset">
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            disabled= {
              this.validateNoteName() ||
              this.validateNoteContent()
            }
          >
            Save
          </button>
        </section>
      </form>
    )
  }

}

export default AddNote