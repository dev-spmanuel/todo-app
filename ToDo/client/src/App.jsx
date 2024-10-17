import Navigation from './components/Navigation/Navigation'
import Results from './components/Results'
import { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'
import useTheme from './hooks/useTheme'

export default function App() {

  const [theme, setTheme] = useState(() => {
    // Returns 1 if the windows theme is 'light' and 0 if it is 'dark'
    return window.matchMedia("(prefers-color-scheme: light)").matches
  })

  useTheme(theme)

  function handleThemeChange() {
    setTheme(!theme)
  }

  const { data, loading, error } = useFetch("http://localhost:3000/api/notes")

  const [notes, setNotes] = useState([])

  useEffect(() => {
    if (data) {
      setNotes(data)
    }
  }, [data])


  function updateNote(updatedNote) {
    fetch(`http://localhost:3000/api/notes/${updatedNote._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedNote)
    })
      .then(
        setNotes(notes.map(note => note._id === updatedNote._id ? updatedNote : note))
      )
      .catch(error => {
        console.error("Error updating note", error)
      })
  }

  function addNote() {
    const newNote = { title: "New Note", tasks: [] }
    fetch(`http://localhost:3000/api/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNote)
    })
      .then(
        setNotes([...notes, newNote])
      )
      .catch(error => {
        console.error("Error adding note", error)
      })
  }

  return (
    <div>
      <Navigation
        theme={theme}
        handleThemeChange={handleThemeChange}
        handleAddNote={addNote}
      />
      {error && <div>Error fetching notes: {error}</div>}
      {loading && <div>Loading notes...</div>}
      <Results
        notes={notes}
        updateNote={updateNote}
      />
    </div>

  )
}
