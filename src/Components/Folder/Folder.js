import React, { Component } from 'react';
import './Folder.css';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

export class Folder extends Component {
  render() {
    
    return (
      <NavLink to={`/folder/${parseInt(this.props.id)}`} className="folderCard">
        <h2 className="folderCardTitle">{this.props.name}</h2>
      </NavLink>
    )
  }
}

Folder.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default Folder
