import NavButton from './NavButton'

export default function Navigation({ theme, handleThemeChange, handleAddList }) {
  return (
    <div className="bg-blue-100 dark:bg-slate-600 dark:text-slate-200 px-4 py-4 flex justify-between">
      <div className="flex items-center">
        ToDo Lists
      </div>

      <div className="flex justify-end space-x-4">

        {/* Add List */}
        <NavButton
          title="Add List"
          onClickUpdate={handleAddList}
        />

        {/* Change Theme */}
        <NavButton
          theme={theme}
          onClickUpdate={handleThemeChange}
        />
      </div>

    </div>
  )
}