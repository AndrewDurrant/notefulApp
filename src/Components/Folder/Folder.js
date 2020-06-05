import React, { Component } from 'react';
import './Folder.css';
import PropTypes from 'prop-types';

export class Folder extends Component {
  render() {
    
    return (
      <article 
        className="folderCard"
        onClick={() => {
        this.props.history.push('/folder/'+this.props.id)
        }}>
        <h2 className="folderCardTitle">{this.props.name}</h2>
      </article>
    )
  }
}

Folder.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default Folder
