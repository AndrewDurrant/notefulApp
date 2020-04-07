import React from 'react';
import ReactDOM from 'react-dom';
import ExpandedNote from './ExpandedNote';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <MemoryRouter>
      <ExpandedNote note={this.note}/>
    </MemoryRouter>
    , div
  );

  ReactDOM.unmountComponentAtNode(div);
})