import { useState } from "react";
import Tasks from "./Tasks";
import Separator from "./Separator";
import Pencil from "../Icons/Pencil";
import Check from "../Icons/Check";
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
              {editTitle ?
                <Check handleOnClick={handleSetTitle} /> :
                <Pencil handleOnClick={handleEditTitle} />
              }
            </div>
          )}
        </div>

        {!editMode && (
          <div className="flex justify-end">
            <Pencil handleOnClick={handleEditMode} />
          </div>
        )}
      </div>

      <Separator />

      <Tasks
        note={note}
        updateNote={handleUpdateNote}
        editMode={editMode}
      />

      {
        editMode && (
          <div>
            <Separator />

            <div className="flex justify-center mt-2 gap-5">
              <Check handleOnClick={handleEditMode} />
              <Cross handleOnClick={handleConfirmDeleteNote} />
            </div>
          </div>
        )
      }


    </section >
  )
}