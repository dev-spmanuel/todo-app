import { useState } from "react"
import Note from "./Notes/Note"

export default function Results({ notes, updateNote }) {

  const [editMode, setEditMode] = useState(false)

  return (
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
  )
}