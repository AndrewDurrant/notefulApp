import React from 'react';
import ReactDOM from 'react-dom';
import AddNote from './AddNote.js';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <MemoryRouter>
      <AddNote />
    </MemoryRouter>
    , div
  );

  ReactDOM.unmountComponentAtNode(div);
})

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<MemoryRouter><AddNote /></MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})