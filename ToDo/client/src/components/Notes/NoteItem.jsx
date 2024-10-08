import { useEffect, useState } from 'react'

export default function NoteItem({ task, onTaskUpdate }) {

  const [isCompleted, setIsCompleted] = useState(task.completed)

  function handleCheckboxChange() {
    setIsCompleted(!isCompleted)
  }

  useEffect(() => {
    onTaskUpdate(task._id, isCompleted)
  }, [isCompleted])

  return (
    <div className="flex items-center mt-3 mb-1">
      <input
        type="checkbox"
        className="size-5"
        onChange={handleCheckboxChange}
        checked={isCompleted}
      />
      <p className={`ml-4 ${isCompleted ? 'line-through' : ''}`}>
        {task.title}
      </p>
    </div >
  )
}