import { useEffect } from "react";
import Calendar from "../../components/Calendar/Calendar";
import NewEventForm from "../../components/NewEventForm/NewEventForm";

function CreateEvent() {
  useEffect(() => {
    document.title = "Crear Evento";
  }, []);

  return (
    <div className="h-full w-full flex">
      <div className="m-auto px-5 w-full max-w-xl lg:max-w-7xl flex lg:flex-row flex-col lg:items-center">
        <div className="lg:w-1/2 w-full">
          <NewEventForm />
        </div>
        <div className="lg:w-1/2 w-full">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
