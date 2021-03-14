import { useEffect } from "react";
import NewInstructorForm from "../../components/NewInstructorForm/NewInstructorForm";

function CreateStudent() {
  useEffect(() => {
    document.title = "Crear Instructor";
  }, []);

  return (
    <div className="h-full w-full flex">
      <div className="m-auto w-full max-w-lg shadow-md">
        <NewInstructorForm />
      </div>
    </div>
  );
}

export default CreateStudent;
