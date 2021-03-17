import { useState } from "react";
import { useForm } from "react-hook-form";  
import {
  MdHighlightOff as ErrorIcon,
  MdDone as SuccessIcon
} from "react-icons/md";
import { createEventType } from "../../api";

function CreateEventTypeForm() {
    const { register, handleSubmit, reset } = useForm();
    const [eventType, setEventType] = useState();
    const [message, setMessage] = useState({ type: "", content: "" });
  
    const onSubmit = (data) => {
      setMessage({ type: "", content: "" });
      createEventType({...data})
        .then(() => {
          reset();
          setEventType(null);
          setMessage({
            type: "success",
            content: "Tipo de evento creado exitosamente"
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
        <h2 className="text-center text-3xl font-semibold">Crear tipo de evento</h2>
        <div className="w-full flex flex-col gap-1">
          <label>Nombre*:</label>
          <input
            ref={register({ required: true })}
            className="border-black border-2 rounded-md p-1"
            required
            name="name"
          />
        </div>
        <button className="px-6 py-2 mt-2 bg-black rounded-lg text-white" >
          Crear tipo de evento
        </button>
      </form>
    );
  }
  
  export default CreateEventTypeForm;
  