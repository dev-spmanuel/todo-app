import Check from "../Icons/Check";
import Pencil from "../Icons/Pencil";

export default function EditModeButton({ editMode, handleEditMode }) {
  return editMode ? <Check handleOnClick={handleEditMode} /> : <Pencil handleOnClick={handleEditMode} />
}