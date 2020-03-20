import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import './FolderList.css'
import NotefulContext from '../../NotefulContext'


export class FolderList extends Component {
  static contextType = NotefulContext;

  render() {
    let context = this.context;
    
    const allFolders = context.folders.map(folder=>{
      return(
        <Folder
          key={folder.id}
          id={folder.id}
          name={folder.name}
          history={this.props.history}
        />
      )
    })
    
    return (
      <section className="folders">
        {allFolders}
        <button 
          className="addCardBtn"
          onClick={() => {}}>
          Add Folder
        </button>
      </section>
    )
  }
}

export default FolderList;
