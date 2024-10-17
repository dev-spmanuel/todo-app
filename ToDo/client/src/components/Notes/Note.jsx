import { useState } from "react";
import Tasks from "./Tasks";
import EditModeButton from "./EditModeButton";
import EditTitleButton from "./EditTitleButton";

export default function Note({ note, handleUpdateNote }) {

  const [editMode, setEditMode] = useState(false)
  const [editTitle, setEditTitle] = useState(false)
  const [newTitle, setNewTitle] = useState(note.title)

  function handleEditMode() {
    setEditTitle(false)
    setEditMode(!editMode)
  }

  function handleEditTitle() {
    setEditTitle(!editTitle)
  }

  function handleSetTitle() {
    console.log("Changing title...")
    const updatedNote = { ...note, title: newTitle }
    handleUpdateNote(updatedNote)
    setEditTitle(false)
  }

  return (
    <section className="bg-blue-200 rounded-lg shadow-lg px-3 py-2 dark:bg-slate-400">
      <div className="flex justify-between gap-6">
        <div className="flex font-bold">
          {editMode && editTitle ? (
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border rounded px-2 py-1"
            />
          ) : (
            note.title
          )}
          {editMode && (
            <div className="flex justify-center">
              <EditTitleButton
                editTitle={editTitle}
                handleEditTitle={handleEditTitle}
                handleSetTitle={handleSetTitle}
              />
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <EditModeButton
            editMode={editMode}
            handleEditMode={handleEditMode}
          />
        </div>

      </div>

      {/* Separador */}
      <div className="border-b border-gray-600 dark:border-gray-200 my-2"></div>

      <Tasks
        note={note}
        updateNote={handleUpdateNote}
        editMode={editMode}
      />

    </section >
  )
}