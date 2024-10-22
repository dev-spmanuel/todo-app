import { useEffect, useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import Results from './components/Results'

import useFetch from './hooks/useFetch'
import useTheme from './hooks/useTheme'

import { addNote, updateNote, deleteNote } from './controllers/noteService'


export default function App() {

  const API_URL = 'http://localhost:3000/api/notes'

  const [theme, setTheme] = useState(() => {
    // Returns 1 if the windows theme is 'light' and 0 if it is 'dark'
    return window.matchMedia("(prefers-color-scheme: light)").matches
  })

  useTheme(theme)

  function handleThemeChange() {
    setTheme(!theme)
  }

  const { data, loading, error } = useFetch(API_URL)

  const [notes, setNotes] = useState([])

  useEffect(() => {
    if (data) {
      setNotes(data)
    }
  }, [data])


  async function handleAddNote() {
    try {
      const newNote = await addNote()
      setNotes(prevNotes => [...prevNotes, newNote])
    } catch (error) {
      console.error("Error adding note", error)
    }
  }

  async function handleUpdateNote(updatedNote) {
    try {
      const updated = await updateNote(updatedNote)
      setNotes(prevNotes => prevNotes.map(note => note._id === updated._id ? updated : note))
    } catch (error) {
      console.error("Error updating note", error)
    }
  }

  async function handleDeleteNote(noteId) {
    try {
      await deleteNote(noteId)
      setNotes(prevNotes => prevNotes.filter(note => note._id !== noteId))
    } catch (error) {
      console.error("Error deleting note", error)
    }
  }

  return (
    <div>
      <Navigation
        theme={theme}
        handleThemeChange={handleThemeChange}
        handleAddNote={handleAddNote}
      />
      {error && <div>Error fetching notes: {error}</div>}
      {loading && <div>Loading notes...</div>}
      <Results
        notes={notes}
        updateNote={handleUpdateNote}
        deleteNote={handleDeleteNote}
      />
    </div>

  )
}
