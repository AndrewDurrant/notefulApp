import React, { Component } from 'react'
import FolderList from './FolderList';
import NoteList from './NoteList';
import './Main.css'

export class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>Noteful</h1>
        <section className="display-area">
          <main className="notes">
            NoteList
            <NoteList />
          </main>
          <section className="folders">
            FolderList
            <FolderList />
          </section>
        </section>
      </div>
    )
  }
}

export default Main
