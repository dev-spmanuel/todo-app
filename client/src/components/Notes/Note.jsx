import { useState } from "react";
import Tasks from "./Tasks";
import Separator from "./Separator";
import EditModeButton from "./EditModeButton";
import EditTitleButton from "./EditTitleButton";
import Cross from "../Icons/Cross";

export default function Note({ note, handleUpdateNote, handleDeleteNote }) {

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

  function handleConfirmDeleteNote() {
    window.confirm("Do you want to delete this note?") && handleDeleteNote(note._id)
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

      <Separator />

      <Tasks
        note={note}
        updateNote={handleUpdateNote}
        editMode={editMode}
      />

      {editMode && (
        <div>
          <Separator />

          <div className="flex justify-center mt-2">
            <Cross handleOnClick={handleConfirmDeleteNote} />
          </div>
        </div>
      )}


    </section >
  )
}