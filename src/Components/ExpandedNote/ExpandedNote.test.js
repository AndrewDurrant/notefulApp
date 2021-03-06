import React from 'react';
import ReactDOM from 'react-dom';
import ExpandedNote from './ExpandedNote';
import Note from '../Note/Note'
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <MemoryRouter>
      <ExpandedNote note={Note}/>
    </MemoryRouter>
    , div
  );

  ReactDOM.unmountComponentAtNode(div);
})

it('renders the UI as expected', () => {
  const tree = renderer
    .create(ExpandedNote)
    .toJSON();
  expect(tree).toMatchSnapshot();
})