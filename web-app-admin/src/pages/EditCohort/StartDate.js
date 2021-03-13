import React, { useState } from "react";
import {
  MdEdit as EditIcon,
  MdClear as CancelIcon,
  MdCheck as ConfirmIcon
} from "react-icons/md";
import { putCohort } from "../../api";
import { useMutation, useQueryClient } from "react-query";

function StartDate({ startDay, id }) {
  const queryClient = useQueryClient();
  const [dateData, setDateData] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const mutation = useMutation((data) => putCohort({ startDay: data }, id));
  const date = new Date(startDay);
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutateAsync(dateData).then(() => {
      queryClient.invalidateQueries(["cohort", id]);
    });
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex flex-row justify-center items-baseline">
        <h1 className="text-5xl inline-block md:text-4xl lg:text-5xl text-center font-semibold">
          Fecha de Inicio
          {!isEditing && (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="inline-block ml-4 p-1 text-gray-600"
              >
                <EditIcon size="29" />
              </button>
              <h3 className="text-3xl text-4xl font-light block text-center">
                {formattedDate}
              </h3>
            </>
          )}
        </h1>

        {isEditing && (
          <button onClick={() => setIsEditing(false)} className="ml-4">
            <CancelIcon size="35" />
          </button>
        )}
      </div>

      {isEditing && (
        <form
          onSubmit={handleSubmit}
          className="w-auto mt-3 flex flex-row justify-center items-center"
        >
          <div className="w-full flex flex-row">
            <input
              onChange={(e) => setDateData(e.target.value)}
              className="w-full"
              value={dateData}
              type="date"
            />
            <button type="submit" className="ml-2">
              <ConfirmIcon size="29" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default StartDate;
