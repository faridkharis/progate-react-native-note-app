import React, { useState } from 'react';
import Home from './src/screens/Home';

const App = () => {
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'First note',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ]);

  return <Home noteList={noteList} />
}


export default App;