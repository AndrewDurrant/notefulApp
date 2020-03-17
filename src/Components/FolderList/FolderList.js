import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import './FolderList.css'

export class FolderList extends Component {
  render() {
    const allFolders=this.props.folders.map(folder=>{
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
  }}


export default FolderList;
