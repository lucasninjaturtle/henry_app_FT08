import { useState } from "react";
import { useForm } from "react-hook-form";
import SearchBarAsync from "react-select/async";
import {
  MdHighlightOff as ErrorIcon,
  MdDone as SuccessIcon
} from "react-icons/md";
import { useQueryClient } from 'react-query';
import { searchEventTypesByName, createEvent } from "../../api";

function NewEventForm() {
  const { register, handleSubmit, reset } = useForm();
  const [selectedEventType, setSelectedEventType] = useState(null);
  const [message, setMessage] = useState({ type: "", content: "" });
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    setMessage({ type: "", content: "" });
    createEvent({ ...data, eventTypeId: selectedEventType?.id })
      .then(() => {
        reset();
        queryClient.invalidateQueries('events');
        setSelectedEventType(null);
        setMessage({
          type: "success",
          content: "Evento creado exitosamente"
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
    searchEventTypesByName(inputValue).then((data) => {
      callback(
        data.map((cohort) => ({ value: cohort.id, label: cohort.name }))
      );
    });
  };

  const handleChange = (selectedOption) => {
    setSelectedEventType(
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
      <h2 className="text-center text-3xl font-semibold">Crear Evento</h2>
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
        <label>Descripción*:</label>
        <textarea
          ref={register({ required: true })}
          className="border-black border-2 rounded-md p-1 h-40"
          required
          name="description"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label>Link*:</label>
        <input
          ref={register({ required: true })}
          className="border-black border-2 rounded-md p-1"
          required
          type="url"
          name="link"
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

      <div className="flex flex-row gap-9">
        <div className="w-full flex flex-col gap-1">
          <label>Horario de Inicio*:</label>
          <input
            ref={register({ required: true })}
            className="border-black border-2 rounded-md p-1"
            required
            type="time"
            name="startTime"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Horario de Finalizar*:</label>
          <input
            ref={register({ required: true })}
            className="border-black border-2 rounded-md p-1"
            required
            type="time"
            name="endTime"
          />
        </div>
      </div>

      <label className="w-full flex flex-col gap-1">
        Tipo de evento:
        <SearchBarAsync
          styles={{
            container: (provided, state) => ({
              ...provided,
              border: "2px black solid",
              borderRadius: "0.375rem"
            })
          }}
          value={
            selectedEventType
              ? { label: selectedEventType.name, value: selectedEventType.id }
              : null
          }
          placeholder={`Buscar tipos...`}
          onChange={handleChange}
          isClearable={true}
          loadOptions={loadOptions}
        />
      </label>

      <button className="px-6 py-2 mt-2 bg-black rounded-lg text-white" >
        Crear Evento
      </button>
    </form>
  );
}

export default NewEventForm;
