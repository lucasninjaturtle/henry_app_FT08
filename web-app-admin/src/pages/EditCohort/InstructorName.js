import React, { useState } from "react";
import { MdEdit as EditIcon, MdClear as CancelIcon } from "react-icons/md";
import { searchInstructorsByName, putCohort } from "../../api";
import SearchBarAsync from "react-select/async";
import { useMutation, useQueryClient } from "react-query";

function InstructorName({ instructor, id }) {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const mutation = useMutation((data) => putCohort(data, id));
  if (!instructor) return null;
  const loadOptions = (inputValue, callback) => {
    if (!inputValue) return;
    searchInstructorsByName(inputValue).then((data) => {
      callback(
        data.map((instructor) => ({
          label: instructor.user.name,
          value: instructor.id
        }))
      );
    });
  };

  const handleChange = (selectedOption) => {
    setIsEditing(false);
    mutation.mutateAsync({ instructorId: selectedOption.value }).then(() => {
      queryClient.invalidateQueries(["cohort", id]);
    });
  };

  const { name, lastName } = instructor;

  return (
    <div>
      <div className="flex flex-row justify-center items-baseline">
        <h1 className="text-5xl inline-block md:text-4xl lg:text-5xl text-center font-semibold">
          Instructor
          {!isEditing && (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="inline-block ml-4 p-1 text-gray-600"
              >
                <EditIcon size="29" />
              </button>
              <h3 className="text-3xl text-4xl font-light block text-center">
                {name ? `${name} ${lastName}` : "Ninguno"}
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
        <div className="w-auto mt-3 flex flex-row justify-center items-center">
          <SearchBarAsync
            onChange={handleChange}
            isClearable={false}
            loadOptions={loadOptions}
            className="w-full max-w-md mr-2"
          />
        </div>
      )}
    </div>
  );
}

export default InstructorName;
