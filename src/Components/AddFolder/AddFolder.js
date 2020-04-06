import React, { Component } from 'react';
import cuid from 'cuid';
import ValidationError from '../../ValidationError';
import NotefulContext from '../../NotefulContext';




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
      id: cuid(),
      name: folderName.value
    }
    console.log('Folder Name: ', folderName.value);
    this.context.addFolder(folder)
      .then(() => {
        // add folder
        this.context.updateFolders(folder)
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
        <div className="form-group">
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
        </div>
        <div className="addFolder__button__group">

            <button type="reset"> 
              Cancel
            </button>
            <button
              type="submit"
              disabled= {
                this.validateFolderName()
              }
            >
              Save
            </button>
        </div>
        
      </form>
    )
  }
}

export default AddFolder
