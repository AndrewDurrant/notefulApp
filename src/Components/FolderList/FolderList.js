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
    let { folders } = this.context;
    
    const allFolders = folders.map(folder=>{
      return(
        <FolderError key={folder.id}>
          <Folder
            folder={ folder }
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
