import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FolderList.css'
import Folder from '../Folder/Folder';
import NotefulContext from '../../NotefulContext';
import FolderError from '../ErrorBoundaries/FolderError';
// import AddFolder from '../AddFolder/AddFolder';


export class FolderList extends Component {
  static contextType = NotefulContext;

  render() {
    let context = this.context;
    
    const allFolders = context.folders.map(folder=>{
      return(
        <FolderError>
          <Folder
            key={folder.id}
            id={folder.id}
            name={folder.name}
            history={this.props.history}
          />
        </FolderError>
      )
    })
    
    return (
      <section className="folders">
        {allFolders}
        <Link to='/addFolder'>
          <button className="addCardBtn">
            Add Folder
          </button>
        </Link>
      </section>
    )
  }
}

export default FolderList;
