import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExpandedNote from '../ExpandedNote/ExpandedNote';
import NotefulContext from '../../NotefulContext';

export class ExpandedView extends Component {
  static contextType = NotefulContext;

  render() {
    let { findNote, findFolder } = this.context;
    let note = findNote(this.props.match.params.noteId)
    
    return (
      <main className="expandedContent">
        <section className="expandedCardContainer">
          <ExpandedNote 
            note={note}
            history={this.props.history}
          />
        </section>
        
        <section className="sidebar">
          <h3 className="folderTitle">
            {
              findFolder(note.folderid).folder_name
            }
          </h3 >
          <Link className="backBtn" to='/'>Go Back</Link>
        </section>
      </main>
    )
  }
}

export default ExpandedView
