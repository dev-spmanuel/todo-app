import List from "./Lists/List"

export default function Results({ lists, updateList, deleteList }) {
  return (
    <div className="bg-white dark:bg-slate-800 min-h-screen px-16 grid place-content-center gap-8">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {lists?.map((list, index) => (
          <List
            key={index}
            list={list}
            handleUpdateList={updateList}
            handleDeleteList={deleteList}
          />
        ))}
      </div>
    </div>
  )
}