import React, { Component } from 'react'

export class Folder extends Component {
  render() {
    
    return (
      <div onClick={() => {
        this.props.history.push('/folder/'+this.props.id)
        }}>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}

export default Folder
