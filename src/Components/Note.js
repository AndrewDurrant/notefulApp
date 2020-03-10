import React, { Component } from 'react'


export class Note extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <button>Delete Note</button>
      </div>
    )
  }
}

export default Note
