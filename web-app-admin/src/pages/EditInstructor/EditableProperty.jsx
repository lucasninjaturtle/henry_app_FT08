import { useState } from "react";
import {
  MdEdit as EditIcon,
  MdCheck as ConfirmIcon,
  MdClear as CancelIcon
} from "react-icons/md";
import { useMutation, useQueryClient } from "react-query";
import { putInstructor } from "../../api";

function EditableProperty({ name, data, id, type = "text", propType }) {
  const queryClient = useQueryClient();
  const [newProperty, setNewProperty] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const mutation = useMutation((data) =>
    putInstructor({ [propType]: data }, id)
  );

  const handleClose = () => {
    setIsEditing(false);
    setNewProperty("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleClose();
    mutation
      .mutateAsync(newProperty)
      .then(() => queryClient.invalidateQueries(["instructor", id]));
  };

  return (
    <div className="flex flex-row gap-x-2">
      {isEditing ? (
        <button className="px-1" onClick={handleClose}>
          <CancelIcon size="20" />
        </button>
      ) : (
        <button className="px-1" onClick={() => setIsEditing(true)}>
          <EditIcon size="20" />
        </button>
      )}
      <div className="text-2xl flex-row flex">
        <h4 className="font-bold">{name}:&nbsp;</h4>
        {isEditing ? (
          <form onSubmit={onSubmit}>
            <input
              type={type}
              value={newProperty}
              onChange={(e) => setNewProperty(e.target.value)}
            />
            <button className="p-1 ml-1" onClick={() => setIsEditing(true)}>
              <ConfirmIcon type="submit" size="20" />
            </button>
          </form>
        ) : (
          <span className="font-normal">{data}</span>
        )}
      </div>
    </div>
  );
}

export default EditableProperty;
