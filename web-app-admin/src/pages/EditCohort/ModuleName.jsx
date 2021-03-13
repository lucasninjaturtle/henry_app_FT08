import React, { useState } from "react";
import { MdEdit as EditIcon, MdClear as CancelIcon } from "react-icons/md";
import { searchModulesByName, putCohort } from "../../api";
import SearchBarAsync from "react-select/async";
import { useMutation, useQueryClient } from "react-query";

function ModuleName({ module, id }) {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const mutation = useMutation((data) => putCohort(data, id));
  if (!module) return null;
  const loadOptions = (inputValue, callback) => {
    if (!inputValue) return;
    searchModulesByName(inputValue).then((data) => {
      callback(
        data.map((module) => ({
          label: module.name,
          value: module.id
        }))
      );
    });
  };

  const handleChange = (selectedOption) => {
    setIsEditing(false);
    mutation.mutateAsync({ moduleId: selectedOption.value }).then(() => {
      queryClient.invalidateQueries(["cohort", id]);
    });
  };

  const { name } = module;

  return (
    <div>
      <div className="flex flex-row justify-center items-baseline">
        <h1 className="text-5xl inline-block md:text-4xl lg:text-5xl text-center font-semibold">
          Modulo
          {!isEditing && (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="inline-block ml-4 p-1 text-gray-600"
              >
                <EditIcon size="29" />
              </button>
              <h3 className="text-3xl text-4xl font-light block text-center">
                {name || "Ninguno"}
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

export default ModuleName;
