import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AsyncSelect from "react-select/async";
import SearchBarAsync from "react-select/async";
import {
  MdHighlightOff as ErrorIcon,
  MdDone as SuccessIcon
} from "react-icons/md";
import { deleteEvents, getEventById, putEvent, searchEventsByName } from "../../api";
const customStyles = {
 
  control: (base) => ({
    ...base,
    width: "300px"
  }),
  menu: (styles) => ({
    ...styles,
    width: "300px"
  })
};

function EditEventForm() {
  
  const { register, handleSubmit, reset, setValue } = useForm();
  const [selectedEventType, setSelectedEventType] = useState(null);
  const [message, setMessage] = useState({ type: "", content: "" });
  const [event, setEvent] = useState();
  const [query, setQuery] = useState("");

  const handleInputChange = (newValue) => {
    const query = newValue.replace(/\W/g, "");
    setQuery(query);
    return query;
  };
  const loadOptions = (inputValue, cb) => {
    
      searchEventsByName(inputValue)
      .then((res) => {
        cb(
          res.map((event) => ({
            value: event.id,
            label: event.name
          }))
        );
      });
  };
    
  const handleOnChange = (value, { action }) => {
    if (action === "select-option") {
      getEventById(value.value)      
        .then((resp) => {
            setValue('name', resp.name);
            setValue('startDay', resp.startDay);
            setValue('link', resp.link);
            setValue('description', resp.description);
            setValue('startTime', resp.startTime);
            setValue('endTime', resp.endTime);
            
            setEvent( value.value );
        })
        .catch((e) => {
          console.log(e);
        });
    };
    
    // setStudents(students.name=value.label)
  };

  const onSubmit = (data) => {
    setMessage({ type: "", content: "" });
    putEvent({ ...data, eventTypeId: selectedEventType?.id }, event)
      .then(() => {
        reset();
        setSelectedEventType(null);
        setMessage({
          type: "success",
          content: "Evento modificado exitosamente"
        });
      })
      .catch((err) => {
        console.log(err.response);
        setMessage({
          type: "error",
          content: "Algo fue mal"
        });
      });
  };
  const handleDelete = () => {
    deleteEvents(event)
    .then(() => {
      reset();
      setSelectedEventType(null);
      setMessage({
        type: "success",
        content: "Evento eliminado exitosamente"
      });
    })
    .catch((err) => {
      console.log(err.response);
      setMessage({
        type: "error",
        content: "Algo fue mal"
      });
    });
  }

  const handleChange = (selectedOption) => {
    setSelectedEventType(
      selectedOption
        ? { id: selectedOption.value, name: selectedOption.label }
        : null
    );
  };
  
  return (
    <div>
     <div className="mt-20 mb-5 flex justify-center">
        <AsyncSelect
          styles={customStyles}
          onInputChange={handleInputChange}
          loadOptions={loadOptions}
          onChange={handleOnChange}
          isClearable={true}
        />
      </div>
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
      <h2 className="text-center text-3xl font-semibold">Editar Evento</h2>
      <div className="w-full flex flex-col gap-1">
        <label>Nombre:</label>
        <input
          ref={register}
          className="border-black border-2 rounded-md p-1"
          required
          name="name"
          />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label>Descripción:</label>
        <textarea
          ref={register}
          className="border-black border-2 rounded-md p-1 h-40"
          required
          name="description"
          />
      </div>
      <div className="w-full flex flex-col gap-1">
        <label>Link:</label>
        <input
          ref={register}
          className="border-black border-2 rounded-md p-1"
          required
          type="url"
          name="link"
          />
      </div>

      <div className="w-full flex flex-col gap-1">
        <label>Fecha de inicio:</label>
        <input
          ref={register}
          className="border-black border-2 rounded-md p-1"
          required
          type="date"
          name="startDay"
          />
      </div>

      <div className="flex flex-row gap-9">
        <div className="w-full flex flex-col gap-1">
          <label>Horario de Inicio:</label>
          <input
            ref={register}
            className="border-black border-2 rounded-md p-1"
            required
            type="time"
            name="startTime"
            />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Horario de Finalizar:</label>
          <input
            ref={register}
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
          <div className="flex justify-between">
      <button className="px-6 py-2 mt-2 bg-black rounded-lg text-white" 
      type='submit'
      disabled={!!event}>
        Editar Evento
      </button>
      <button className="px-6 py-2 mt-2 bg-red-500 rounded-lg text-white" 
      onClick={handleDelete}
      type='button'
      disabled={!!event}>
        Eliminar Evento
      </button>
      </div>
    </form>
  </div>
  );
}

export default EditEventForm;
