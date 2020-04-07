import React from 'react';
import ReactDOM from 'react-dom';
import AddFolder from './AddFolder';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';



it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <MemoryRouter>
      <AddFolder />
    </MemoryRouter>
    , div
  );

  ReactDOM.unmountComponentAtNode(div);
})

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<MemoryRouter><AddFolder /></MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})