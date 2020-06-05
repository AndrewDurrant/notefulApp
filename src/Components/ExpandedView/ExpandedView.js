import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExpandedNote from '../ExpandedNote/ExpandedNote';
import NotefulContext from '../../NotefulContext';

export class ExpandedView extends Component {
  static contextType = NotefulContext;

  render() {
    let { notes, folders, addNote } = this.context;
    console.log(addNote);
    
    // get note that matches id
    let note = notes.find(note => note.id === this.props.match.params.noteId);

    let newFolder = folders.find(folder => {
      return folder.id === note.folderid 
    })
    console.log(folders);
              
    
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
              folders.find(folder => {
                return folder.id === note.folderid 
              }).folder_name
            }
          </h3 >
          <Link className="backBtn" to='/'>Go Back</Link>
        </section>
      </main>
    )
  }
}

export default ExpandedView
