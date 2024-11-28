import { useState } from "react";
import Tasks from "./Tasks";
import Separator from "./Separator";
import Pencil from "../Icons/Pencil";
import Check from "../Icons/Check";
import Cross from "../Icons/Cross";

export default function List({ list, handleUpdateList, handleDeleteList }) {

  const [editMode, setEditMode] = useState(false)
  const [editTitle, setEditTitle] = useState(false)
  const [newTitle, setNewTitle] = useState(list.title)

  function handleEditMode() {
    setEditTitle(false)
    setEditMode(!editMode)
  }

  function handleEditTitle() {
    setEditTitle(!editTitle)
  }

  function handleSetTitle() {
    const updatedList = { ...list, title: newTitle }
    handleUpdateList(updatedList)
    setEditTitle(false)
  }

  function handleConfirmDeleteList() {
    window.confirm("Do you want to delete this list?") && handleDeleteList(list._id)
  }

  return (
    <section className="w-full min-h-32 bg-blue-200 rounded-lg shadow-lg px-4 py-4 dark:bg-slate-400">
      <div className="flex justify-between gap-6">
        <div className="flex font-bold text-lg">
          {editMode && editTitle ? (
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border rounded px-2 py-1"
            />
          ) : (
            list.title
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
        list={list}
        updateList={handleUpdateList}
        editMode={editMode}
      />

      {
        editMode && (
          <div>
            <Separator />

            <div className="flex justify-center mt-2 gap-5">
              <Check handleOnClick={handleEditMode} />
              <Cross handleOnClick={handleConfirmDeleteList} />
            </div>
          </div>
        )
      }


    </section >
  )
}