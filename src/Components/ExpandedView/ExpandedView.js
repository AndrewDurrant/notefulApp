import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExpandedNote from '../ExpandedNote/ExpandedNote';
import NotefulContext from '../../NotefulContext';

export class ExpandedView extends Component {
  static contextType = NotefulContext;

  render() {
    let context = this.context;
    // get note that matches id
    let note = context.notes.find(note => note.id === this.props.match.params.noteId);

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
              context.folders.find(folder => {
                return folder.id === note.folderId 
              }).name
            }
          </h3 >
          <Link className="backBtn" to='/'>Go Back</Link>
        </section>
      </main>
    )
  }
}

export default ExpandedView
