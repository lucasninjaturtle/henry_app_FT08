import { useEffect } from "react";
import CreateEventTypeForm from "../../components/CreateEventTypeForm/CreateEventTypeForm";

function CreateEventType() {
  useEffect(() => {
    document.title = "Crear Tipo de evento";
  }, []);

  return (
    <div className="h-full w-full flex">
      <div className="m-auto w-full max-w-lg shadow-md">
        <CreateEventTypeForm />
      </div>
    </div>
  );
}

export default CreateEventType;
