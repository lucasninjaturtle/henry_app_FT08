import { useState } from "react";
import { useForm } from "react-hook-form";
import SearchBarAsync from "react-select/async";
import {
  MdHighlightOff as ErrorIcon,
  MdDone as SuccessIcon
} from "react-icons/md";
import { searchCohortsByName, createGroup } from "../../api";

function NewGroupForm() {
  const { register, handleSubmit, reset } = useForm();
  const [selectedCohort, setSelectedCohort] = useState(null);
  const [message, setMessage] = useState({ type: "", content: "" });

  const onSubmit = (data) => {
    setMessage({ type: "", content: "" });
    createGroup({ ...data, cohortId: selectedCohort.id })
      .then(() => {
        reset();
        setSelectedCohort(null);
        setMessage({
          type: "success",
          content: "Grupo creado exitosamente"
        });
      })
      .catch((err) => {
        console.log(err.response);
        setMessage({
          type: "error",
          content: "Algo fue mal"
          // content: JSON.stringify(err.response.data, null, 2)
        });
      });
  };

  const loadOptions = (inputValue, callback) => {
    if (!inputValue) return;
    searchCohortsByName(inputValue).then((data) => {
      callback(
        data.map((cohort) => ({ value: cohort.id, label: cohort.name }))
      );
    });
  };

  const handleChange = (selectedOption) => {
    setSelectedCohort(
      selectedOption
        ? { id: selectedOption.value, name: selectedOption.label }
        : null
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 bg-white flex flex-col gap-4 rounded-md"
    >
      {message.type &&
        (message.type === "success" ? (
          <div className="bg-green-500 rounded-md text-lg items-center p-3 px-4 flex text-white">
            <SuccessIcon size="31" />
            <p className="ml-2">{message.content}</p>
          </div>
        ) : (
          <div className="bg-red-500 rounded-md text-lg items-center p-3 px-4 flex text-white">
            <ErrorIcon size="31" />
            <p className="ml-2">{message.content}</p>
          </div>
        ))}
      <h2 className="text-center text-3xl font-semibold">Crear Grupo</h2>
      <div className="w-full flex flex-col gap-1">
        <label>Nombre*:</label>
        <input
          ref={register({ required: true })}
          className="border-black border-2 rounded-md p-1"
          required
          name="name"
        />
      </div>

      <label className="w-full flex flex-col gap-1">
        Cohorte:
        <SearchBarAsync
          styles={{
            container: (provided, state) => ({
              ...provided,
              border: "2px black solid",
              borderRadius: "0.375rem"
            })
          }}
          value={
            selectedCohort
              ? { label: selectedCohort.name, value: selectedCohort.id }
              : null
          }
          placeholder={`Buscar cohortes...`}
          onChange={handleChange}
          isClearable={true}
          loadOptions={loadOptions}
        />
      </label>

      <button className="px-6 py-2 mt-2 bg-black rounded-lg text-white">
        Crear Grupo
      </button>
    </form>
  );
}

export default NewGroupForm;
