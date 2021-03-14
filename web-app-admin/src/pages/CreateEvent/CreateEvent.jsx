import { useEffect } from "react";
import NewEventForm from "../../components/NewEventForm/NewEventForm";

function CreateEvent() {
  useEffect(() => {
    document.title = "Crear Evento";
  }, []);

  return (
    <div className="h-full w-full flex">
      <div className="m-auto w-full max-w-lg shadow-md">
        <NewEventForm />
      </div>
    </div>
  );
}

export default CreateEvent;
