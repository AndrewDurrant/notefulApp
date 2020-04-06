import React from 'react';

const NotefulContext = React.createContext({
  folders: [],
  notes: [],
  error: null,
  addNote: () => {},
  deleteNote: () => {},
  addFolder: () => {},
  updateFolders: () => {},
  updateNotes: () => {}
})




export default NotefulContext;