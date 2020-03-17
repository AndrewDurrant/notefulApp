import React, { Component } from 'react';
import FolderList from '../FolderList/FolderList';
import NoteList from '../NoteList/NoteList';
import './Main.css';
import { Route, Link } from 'react-router-dom';
import ExpandedNote from '../ExpandedNote/ExpandedNote';

export class Main extends Component {
	render() {
		return (
			<div className="main-container">
        <header>
          <Link 
            className="homeLink"
            to='/'>
            <h1 className="appName">
              Noteful
            </h1>
          </Link>
        </header>
        <Route exact path="/"
          render={(props) => {
            return (
              <main>
                {' '}
                <NoteList 
                  notes={this.props.notes}
                  history={props.history} 
                />
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
              <main className="expandedContent">
                {' '}
                <section className="expandedCardContainer">
                  <ExpandedNote 
                    note={note}
                    history={props.history}
                    folderName={this.props.folders.find(folder => {
                      return folder.id === note.folderId 
                    }).name
                    }
                  />
                </section>
                <section className="sidebar">
                  <h3 className="folderTitle">{this.props.folders.find(folder => {
                    return folder.id === note.folderId 
                  }).name
                  }</h3 >
                  <Link className="backBtn" to='/'>Go Back</Link>
                </section>
              </main>
              );
            }}
          />
			</div>
		);
	}
}

export default Main;
