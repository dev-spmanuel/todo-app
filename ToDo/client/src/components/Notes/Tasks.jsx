import { useState } from "react"
import Task from "./Task"
import Plus from "../Icons/Plus"
import Check from "../Icons/Check"

export default function Tasks({ note, updateNote, editMode }) {

  const [newTask, setNewTask] = useState("")
  const [addingTask, setAddingTask] = useState(false)

  function handleTaskUpdate(taskId, completed) {
    const updatedNote = { ...note, tasks: note.tasks.map(task => task._id === taskId ? { ...task, completed } : task) }
    updateNote(updatedNote)
  }

  function handleTaskDelete(taskId) {
    const updatedNote = { ...note, tasks: note.tasks.filter(task => task._id !== taskId) }
    updateNote(updatedNote)
  }

  function handleAddTask() {
    console.log(newTask)
    const updatedNote = { ...note, tasks: [...note.tasks, { title: newTask, completed: false }] }
    updateNote(updatedNote)
    setNewTask("")
    setAddingTask(false)
  }

  return (
    <div className="space-y-2">
      {note.tasks?.map((task, index) => (
        <Task
          key={index}
          task={task}
          onTaskUpdate={handleTaskUpdate}
          onTaskDelete={handleTaskDelete}
          editMode={editMode}
        />
      ))}
      {editMode && (
        <div className="flex justify-start gap-2">
          {addingTask ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="border rounded px-2 py-1"
              />
              <Check handleOnClick={handleAddTask} />
            </div>
          ) : (
            <div className="flex justify-start gap-2">
              <Plus handleOnClick={() => setAddingTask(true)} />
              <p className="font-bold text-slate-700">
                New Task
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}