import React, { Component } from 'react';
import './Folder.css';

export class Folder extends Component {
  render() {
    
    return (
      <div 
        className="folderCard"
        onClick={() => {
        this.props.history.push('/folder/'+this.props.id)
        }}>
        <h2 className="folderCardTitle">{this.props.name}</h2>
      </div>
    )
  }
}

export default Folder
