import { useEffect, useState } from 'react'
import Cross from '../Icons/Cross'
import List from './List'

export default function Task({ task, onTaskUpdate, onTaskDelete, editMode }) {

  const [isCompleted, setIsCompleted] = useState(task.completed)

  function handleCheckboxChange() {
    setIsCompleted(!isCompleted)
  }

  useEffect(() => {
    onTaskUpdate(task._id, isCompleted)
  }, [isCompleted])

  return (
    <div className="flex items-center justify-between mt-3 mb-1">
      <div className="flex items-center">
        <input
          id={task._id}
          type="checkbox"
          className="size-5"
          onChange={handleCheckboxChange}
          checked={isCompleted}
        />
        <p className={`ml-2 ${isCompleted ? 'line-through' : ''}`}>
          {task.title}
        </p>
      </div>
      {editMode && (
        <div className="flex justify-end">
          <Cross handleOnClick={() => onTaskDelete(task._id)} />
        </div>
      )}
    </div >
  )
}