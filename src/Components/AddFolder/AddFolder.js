import React, { Component } from 'react';
import ValidationError from '../../ValidationError';
import NotefulContext from '../../NotefulContext';
import { Link } from 'react-router-dom';
import './AddFolder.css';


export class AddFolder extends Component {
  static contextType = NotefulContext;

  constructor(props) {
    super(props);
    this.state = {
      folderName: {
        value: '',
        touched: false
      }
    }
  }

  updateFolderName(name) {
    this.setState({
      folderName: {
        value: name, 
        touched: true
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { folderName } = this.state;
    const folder = {
      title: folderName.value
    }
    this.context.addFolder(folder)
      .then(() => {
        // add folder
        this.props.history.push('/')
      })
  }

  validateFolderName() {
    const folderName = this.state.folderName.value.trim();
    if(folderName.length === 0) {
      return 'Folder name is required';
    } else if(folderName.length < 3) {
      return 'Folder name must be at least 3 characters long'
    }
  }



  render() {
    // let context = this.context
    const folderNameError = this.validateFolderName();

    return (
      <form className="addFolder" onSubmit={e => this.handleSubmit(e)}>
        <h2>Add Folder</h2>
        <div>* required field</div>
        <section className="form-group">
          <label htmlFor="folderName">Folder Name *</label>
          <input 
            type="text"
            name="folderName"
            id="folderName"
            onChange={e => this.updateFolderName(e.target.value)}
          />
          {this.state.folderName.touched && (
            <ValidationError message={folderNameError} />
          )}
        </section>
        <section className="addFolder__button__group">
          <Link to='/'>
            <button 
              className="basic-btn" 
              type="reset"> 
              Cancel
            </button>
          </Link>
            <button
              className="basic-btn"
              type="submit"
              disabled= {
                this.validateFolderName()
              }
            >
              Save
            </button>
        </section>
        
      </form>
    )
  }
}

export default AddFolder
