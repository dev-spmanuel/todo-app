import ToDos from "./ToDos";

export default function Note({ note, handleUpdateNote }) {
  return (
    <section className="bg-blue-200 rounded-lg shadow-lg px-3 py-2 dark:bg-slate-400">
      <div className="flex justify-between gap-5">
        <div className="flex font-bold">
          {note.title || "Título"}
        </div>
        {/* <div className="flex justify-end">
          <button className="">
            Ed
          </button>
        </div> */}
      </div>

      {/* Separador */}
      <div className="border-b border-gray-600 dark:border-gray-200 my-2"></div>

      <ToDos note={note} updateNote={handleUpdateNote} />

    </section>
  )
}