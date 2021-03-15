import { useState } from "react";
import { useForm } from "react-hook-form";
import SearchBarAsync from "react-select/async";
import {
  MdHighlightOff as ErrorIcon,
  MdDone as SuccessIcon
} from "react-icons/md";
import {
  searchModulesByName,
  createCohort,
  searchPmsByName,
  searchInstructorsByName
} from "../../api";

function NewCohortForm() {
  const { register, handleSubmit, reset } = useForm();
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [selectedPm, setSelectedPm] = useState(null);
  const [message, setMessage] = useState({ type: "", content: "" });

  const onSubmit = (data) => {
    setMessage({ type: "", content: "" });
    createCohort({
      ...data,
      moduleId: selectedModule?.id,
      instructorId: selectedInstructor?.id,
      pmId: selectedPm?.id
    })
      .then(() => {
        reset();
        setSelectedModule(null);
        setSelectedInstructor(null);
        setSelectedPm(null);
        setMessage({
          type: "success",
          content: "Cohorte creado exitosamente"
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
    searchModulesByName(inputValue).then((data) => {
      callback(
        data.map((cohort) => ({ value: cohort.id, label: cohort.name }))
      );
    });
  };

  const handleChange = (selectedOption) => {
    setSelectedModule(
      selectedOption
        ? { id: selectedOption.value, name: selectedOption.label }
        : null
    );
  };

  // const loadPmOptions = (inputValue, callback) => {
  //   if (!inputValue) return;
  //   searchPmsByName(inputValue).then((data) => {
  //     callback(
  //       data.map((pm) => ({ value: pm.id, label: pm.name + " " + pm.lastName }))
  //     );
  //   });
  // };

  // const handlePmChange = (selectedOption) => {
  //   setSelectedPm(
  //     selectedOption
  //       ? { id: selectedOption.value, name: selectedOption.label }
  //       : null
  //   );
  // };

  const loadInstructorOptions = (inputValue, callback) => {
    if (!inputValue) return;
    searchInstructorsByName(inputValue).then((data) => {
      callback(
        data.map((pm) => ({ value: pm.id, label: pm.name + " " + pm.lastName }))
      );
    });
  };

  const handleInstructorChange = (selectedOption) => {
    setSelectedInstructor(
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
      <h2 className="text-center text-3xl font-semibold">Crear Cohorte</h2>
      <div className="w-full flex flex-col gap-1">
        <label>Nombre*:</label>
        <input
          ref={register({ required: true })}
          className="border-black border-2 rounded-md p-1"
          required
          name="name"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label>Fecha de inicio*:</label>
        <input
          ref={register({ required: true })}
          className="border-black border-2 rounded-md p-1"
          required
          type="date"
          name="startDay"
        />
      </div>

      <label className="w-full flex flex-col gap-1">
        Modulo:
        <SearchBarAsync
          styles={{
            container: (provided, state) => ({
              ...provided,
              border: "2px black solid",
              borderRadius: "0.375rem"
            })
          }}
          value={
            selectedModule
              ? { label: selectedModule.name, value: selectedModule.id }
              : null
          }
          placeholder={`Buscar modulos...`}
          onChange={handleChange}
          isClearable={true}
          loadOptions={loadOptions}
        />
      </label>

      <label className="w-full flex flex-col gap-1">
        Instructor:
        <SearchBarAsync
          styles={{
            container: (provided, state) => ({
              ...provided,
              border: "2px black solid",
              borderRadius: "0.375rem"
            })
          }}
          value={
            selectedInstructor
              ? { label: selectedInstructor.name, value: selectedInstructor.id }
              : null
          }
          placeholder={`Buscar instructor...`}
          onChange={handleInstructorChange}
          isClearable={true}
          loadOptions={loadInstructorOptions}
        />
      </label>

      {/* <label className="w-full flex flex-col gap-1">
        Pm:
        <SearchBarAsync
          styles={{
            container: (provided, state) => ({
              ...provided,
              border: "2px black solid",
              borderRadius: "0.375rem"
            })
          }}
          value={
            selectedPm
              ? {
                  label: selectedPm.name,
                  value: selectedPm.id
                }
              : null
          }
          placeholder={`Buscar pms...`}
          onChange={handlePmChange}
          isClearable={true}
          loadOptions={loadPmOptions}
        />
      </label> */}

      <button className="px-6 py-2 mt-2 bg-black rounded-lg text-white">
        Crear Cohorte
      </button>
    </form>
  );
}

export default NewCohortForm;
