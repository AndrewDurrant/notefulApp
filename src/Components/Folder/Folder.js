import React, { Component } from 'react';
import './Folder.css';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

export class Folder extends Component {
  render() {
    const { title, id } = this.props.folder;
    // const { history } = this.props; *** may need this for a delete button

    return (
      <NavLink to={`/folder/${parseInt(id)}`} className="folderCard">
        <h2 className="folderCardTitle">{title}</h2>
      </NavLink>
    )
  }
}

Folder.propTypes = {
  folder: PropTypes.object.isRequired
}

export default Folder
