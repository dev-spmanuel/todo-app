import Moon from '../Icons/Moon.jsx';
import LightBulb from '../Icons/LightBulb.jsx';

export default function NavButton({ theme, title, onClickUpdate }) {
  return (
    <button className="text-lg rounded-xl border border-slate-700 px-4 py-1 
                  hover:bg-blue-200 dark:hover:bg-slate-400 hover:border-transparent 
                  dark:border-slate-400 dark:hover:text-black"
      onClick={onClickUpdate}
    >
      {title || (
        theme ? (
          <Moon />
        ) : (
          <LightBulb />
        )
      )}
    </button >
  )
}