import NoteItem from "./NoteItem"

export default function ToDos({ note, updateNote }) {

  function handleTaskUpdate(taskId, completed) {
    const updatedNote = { ...note, tasks: note.tasks.map(task => task._id === taskId ? { ...task, completed } : task) }
    updateNote(updatedNote)
  }


  return (
    <div className="space-y-2">
      {note.tasks?.map((task, index) => (
        <NoteItem
          key={index}
          task={task}
          onTaskUpdate={handleTaskUpdate}
        />
      ))}
    </div>
  )
}