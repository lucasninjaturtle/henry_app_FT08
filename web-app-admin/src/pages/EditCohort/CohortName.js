import { useState } from "react";
import {
  MdEdit as EditIcon,
  MdCheck as ConfirmIcon,
  MdClear as CancelIcon
} from "react-icons/md";
import { useMutation, useQueryClient } from "react-query";
import { putCohort } from "../../api";

function CohortName({ name, id }) {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [newCohortName, setNewCohortName] = useState("");
  const mutation = useMutation(() => putCohort({ name: newCohortName }, id));

  const closeEdit = () => {
    setIsEditing(false);
    setNewCohortName("");
  };

  const onMutate = () => {
    if (!newCohortName) return;
    mutation.mutateAsync().then(() => {
      queryClient.invalidateQueries(["cohort", id]);
    });
    closeEdit();
  };

  if (isEditing)
    return (
      <div onKeyUp={(e) => e.key === "Enter" && onMutate()}>
        <div className="w-auto flex flex-row justify-center items-center">
          <button onClick={closeEdit} className="mr-5 invisible md:visible">
            <CancelIcon size="45" />
          </button>
          <input
            value={newCohortName}
            onChange={(e) => setNewCohortName(e.target.value)}
            className="block text-5xl font-normal"
          />
          <button onClick={onMutate} className="ml-5 invisible md:visible">
            <ConfirmIcon size="45" />
          </button>
        </div>
        <div className="md:hidden mt-5 flex flex-row justify-evenly">
          <button onClick={closeEdit} className="mr-5">
            <CancelIcon size="45" />
          </button>
          <button onClick={onMutate} className="ml-5">
            <ConfirmIcon size="45" />
          </button>
        </div>
      </div>
    );

  return (
    <div className="w-auto">
      <h1 className="text-6xl underline text-center font-semibold">
        {name}
        <button
          onClick={() => setIsEditing(true)}
          className="inline-block ml-4 p-1 text-gray-600"
        >
          <EditIcon size="29" />
        </button>
      </h1>
      <small className="text-4xl font-light block text-center">ID: {id}</small>
    </div>
  );
}

export default CohortName;
