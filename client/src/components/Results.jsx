import List from "./Lists/List"

export default function Results({ lists, updateList, deleteList }) {
  return (
    <div className="bg-zinc-300 dark:bg-zinc-800 min-h-screen px-16 py-16">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_400px))] gap-8 place-content-center">
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