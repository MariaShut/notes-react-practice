import { useState } from 'react';
import Header from './Header';
import CreateArea from './CreateArea';
import NoteList from './NoteList';
import Footer from './Footer';
import notes from '../notes';

function App() {
  const [allNotes, setAllNotes] = useState(notes);

  function addNote(note) {
    setAllNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setAllNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      <NoteList newNotesArr={allNotes} onDelete={deleteNote} />
      <Footer />
    </>
  )
}

export default App;