import { useEffect } from "react";
import NewStudentForm from "../../components/NewStudentForm/NewStudentForm";

function CreateStudent() {
  useEffect(() => {
    document.title = "Crear Estudiante";
  }, []);

  return (
    <div className="h-full w-full flex">
      <div className="m-auto w-full max-w-lg shadow-md">
        <NewStudentForm />
      </div>
    </div>
  );
}

export default CreateStudent;
