import { useEffect } from "react";
import NewCohortForm from "../../components/NewCohortForm/NewCohortForm";

function CreateStudent() {
  useEffect(() => {
    document.title = "Crear Cohorte";
  }, []);
  return (
    <div className="h-full w-full flex">
      <div className="m-auto w-full max-w-lg shadow-md">
        <NewCohortForm />
      </div>
    </div>
  );
}

export default CreateStudent;
