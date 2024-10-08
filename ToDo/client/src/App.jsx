import Navigation from './components/Navigation/Navigation'
import Note from './components/Notes/Note'
import { useEffect, useState } from 'react'

export default function App() {

  const [theme, setTheme] = useState(() => {
    // Returns 1 if the windows theme is 'light' and 0 if it is 'dark'
    return window.matchMedia("(prefers-color-scheme: light)").matches
  })

  const [notes, setNotes] = useState([])

  useEffect(() => {
    // Add or remove the 'dark' class from the html element
    if (theme) {
      document.querySelector("html").classList.remove("dark")
    } else {
      document.querySelector("html").classList.add("dark")
    }
  }, [theme])

  useEffect(() => {
    fetch("http://localhost:3000/api/notes")
      .then(res => res.json())
      .then(notes => setNotes(notes))
  }, [])


  // HANDLERS
  function handleThemeChange() {
    setTheme(!theme)
  }

  async function updateNote(updatedNote) {
    try {
      const response = await fetch(`http://localhost:3000/api/notes/${updatedNote._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedNote)
      })

      if (!response.ok) {
        throw new Error('Failed to update note');
      }

      setNotes(notes.map(note => note._id === updatedNote._id ? updatedNote : note))
    } catch (error) {
      console.error("Error updating note", error)
    }
  }

  function addNote() {
    const newNote = { title: "New Note", tasks: [] }
    setNotes([...notes, newNote])
  }

  return (
    <div className="${theme}">
      <Navigation
        theme={theme}
        handleThemeChange={handleThemeChange}
        handleAddNote={addNote}
      />
      <div className="bg-white dark:bg-slate-800 min-h-screen px-16 grid place-content-center gap-8">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {notes?.map((note, index) => (
            <Note
              key={index}
              note={note}
              handleUpdateNote={updateNote}
            />
          ))}
        </div>
      </div>
    </div>

  )
}
