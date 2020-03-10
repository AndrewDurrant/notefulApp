import React, { Component } from 'react';
import Folder from './Folder';

export class FolderList extends Component {
  render() {
    const allFolders=this.props.folders.map(folder=>{
      return(
        <Folder
        key={folder.id}
        id={folder.id}
        name={folder.name}
        />
      )
    })
    
    return (
      
      <section className="folders">
      <div>
      FolderList
        {allFolders}
        <button>Add Folder</button>
        </div>
        </section>
    )
  }}


export default FolderList;
