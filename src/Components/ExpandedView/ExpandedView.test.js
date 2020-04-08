import React from 'react';
import ReactDOM from 'react-dom';
import ExpandedNote from '../ExpandedNote/ExpandedNote';
import ExpandedView from './ExpandedView';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import NotefulContext from '../../NotefulContext';

const context = NotefulContext;

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <MemoryRouter>
      <ExpandedView 
      />
    </MemoryRouter>
    , div
  )

  ReactDOM.unmountComponentAtNode(div);
})