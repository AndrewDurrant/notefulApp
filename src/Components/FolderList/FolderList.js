import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import '../Main/Main.css'

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
        <div>
          {allFolders}
          <button onClick={() => {
            }}>Add Folder</button>
        </div>
      </section>
    )
  }}


export default FolderList;
