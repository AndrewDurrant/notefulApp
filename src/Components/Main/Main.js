import React, { Component } from 'react';
import FolderList from '../FolderList/FolderList';
import NoteList from '../NoteList/NoteList';
import './Main.css';
import { Route } from 'react-router-dom';
import ExpandedNote from '../ExpandedNote/ExpandedNote';

export class Main extends Component {
	render() {
		return (
			<div className="main-container">
				<h1>Noteful</h1>
        <Route exact path="/"
          render={(props) => {
            return (
              <main>
                {' '}
                <NoteList 
                  notes={this.props.notes} />
                <FolderList 
                  folders={this.props.folders}
                  history={props.history} />
              </main>
            );
          }}
        />
        <Route exact path="/folder/:folderId"
          render={(props) => {
            return (
              <main>
                {' '}
                <NoteList 
                  notes={this.props.notes.filter
                  (note => note.folderId === props.match.params.folderId)} 
                  history={props.history} 
                />
                <FolderList 
                  folders={this.props.folders}
                  history={props.history} 
                />
              </main>
            );
          }}
        />
        <Route exact path="/note/:noteId"
          render={(props) => {
            let note = this.props.notes.find(note => note.id === props.match.params.noteId)
            return (
              <main>
                {' '}
                <ExpandedNote 
                  note={note}
                  history={props.history}
                  folderName={this.props.folders.find(folder => {
                    return folder.id === note.folderId 
                  }).name
                  }
                />
              </main>
              );
            }}
          />
			</div>
		);
	}
}

export default Main;
