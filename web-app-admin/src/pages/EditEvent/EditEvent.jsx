import { useEffect } from "react";
import Calendar from "../../components/Calendar/Calendar";
import EditEventForm from "../../components/EditEventForm/EditEventForm";

function CreateEvent() {
  useEffect(() => {
    document.title = "Crear Evento";
  }, []);

  return (
    <div className="h-full w-full flex">
      <div className="m-auto px-5 w-full max-w-xl lg:max-w-7xl flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full">
          <EditEventForm />
        </div>
        <div className="lg:w-1/2 w-full">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
