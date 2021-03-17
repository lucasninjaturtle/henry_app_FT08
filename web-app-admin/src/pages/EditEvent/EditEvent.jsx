import { useEffect } from "react";
// import Calendar from "../../components/Calendar/Calendar";
import EditEventForm from "../../components/EditEventForm/EditEventForm";

function CreateEvent() {
  useEffect(() => {
    document.title = "Editar evento";
  }, []);

  return (
    <div className="h-full w-full flex">
      <div className="m-auto w-full max-w-lg shadow-md">
          <EditEventForm />
      </div>
    </div>
  );
}

export default CreateEvent;
