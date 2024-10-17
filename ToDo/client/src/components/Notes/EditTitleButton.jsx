import Check from "../Icons/Check";
import Pencil from "../Icons/Pencil";

export default function EditTitleButton({ editTitle, handleSetTitle, handleEditTitle }) {
  return editTitle ? <Check handleOnClick={handleSetTitle} /> : <Pencil handleOnClick={handleEditTitle} />
}