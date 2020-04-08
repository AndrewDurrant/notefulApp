import React from 'react';
import ReactDOM from 'react-dom';
import ExpandedNote from '../ExpandedNote/ExpandedNote';
import ExpandedView from './ExpandedView';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import NotefulContext from '../../NotefulContext';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const contextValue = {
    folders: [
      {
        "id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Important"
      },
      {
        "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Super"
      }
    ],
    notes: [
      {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Dogs",
        "modified": "2019-01-03T00:00:00.000Z",
        "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
        "content": "Dolores culpa iste et ut atque distinctio repudiandae aut. Suscipit vel voluptatem. Et rem."
      },
      {
        "id": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Cats",
        "modified": "2018-08-15T23:00:00.000Z",
        "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
        "content": "Molestias voluptas et. Molestiae cumque quidem est minus sed placeat maxime nihil illo. Dolor maxime rerum esse."
      }
    ],
  }

  ReactDOM.render(
    <NotefulContext.Provider value={contextValue}>
      <MemoryRouter>
        <ExpandedView />
      </MemoryRouter>
    </NotefulContext.Provider>
    , div
  )

  ReactDOM.unmountComponentAtNode(div);
})