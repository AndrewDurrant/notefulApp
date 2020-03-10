import React, { Component } from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';
import './Main.css';
import { Route } from 'react-router-dom';
import ExpandedNote from './ExpandedNote';

export class Main extends Component {
	render() {
		return (
			<div className="main-container">
				<h1>Noteful</h1>
				<section className="display-area">
					<Route
						exact
						path="/"
						render={(props) => {
							return (
								<main>
									{' '}
									<NoteList notes={this.props.notes} />
									<FolderList folders={this.props.folders} />
								</main>
							);
						}}
          />
          <Route
          exact
          path="/folder/:folderId"
          render={(props) => {
            return (
              <main>
                {' '}
                <NoteList notes={this.props.notes.filter
                  (note=>note.folderId===props.match.params.folderId)} />
                <FolderList folders={this.props.folders} />
              </main>
            );
          }}
        />
        <Route
        exact
        path="/note/:noteId"
        render={(props) => {
          return (
            <main>
              {' '}
            <ExpandedNote note={this.props.notes.find(note=>note.id===props.match.params.noteId)}/>
            </main>
          );
        }}
      />

				</section>
			</div>
		);
	}
}

export default Main;
