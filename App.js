import React, { useState } from 'react';
import Home from './src/screens/Home';
import AddNote from './src/screens/AddNote';
import EditNote from './src/screens/EditNote';

const CurrentPageWidget = ({
  noteList,
  currentPage,
  setCurrentPage,
}) => {
  switch (currentPage) {
    case 'home':
      return(
        <Home 
          noteList={noteList}
          setCurrentPage={setCurrentPage}
        />
      )
    case 'add':
      return <AddNote />
    case 'edit':
      return <EditNote />
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'First note',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ]);

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
    />
  )
}

export default App;