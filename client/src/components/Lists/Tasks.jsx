import { useState } from "react"
import Task from "./Task"
import Plus from "../Icons/Plus"
import Check from "../Icons/Check"

export default function Tasks({ list, updateList, editMode }) {

  const [newTask, setNewTask] = useState("")
  const [addingTask, setAddingTask] = useState(false)

  function handleTaskUpdate(taskId, completed) {
    const updatedList = { ...list, tasks: list.tasks.map(task => task._id === taskId ? { ...task, completed } : task) }
    updateList(updatedList)
  }

  function handleTaskDelete(taskId) {
    const updatedList = { ...list, tasks: list.tasks.filter(task => task._id !== taskId) }
    updateList(updatedList)
  }

  function handleAddTask() {
    console.log(newTask)
    const updatedList = { ...list, tasks: [...list.tasks, { title: newTask, completed: false }] }
    updateList(updatedList)
    setNewTask("")
    setAddingTask(false)
  }

  return (
    <div className="space-y-2 text-lg overflow-auto">
      {list.tasks?.map((task, index) => (
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