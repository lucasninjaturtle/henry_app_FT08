import React from "react";
import NewStudentForm from "../../components/NewStudentForm/NewStudentForm";

function CreateStudent() {
  return (
    <div className="h-full w-full flex">
      <div className="m-auto w-full max-w-lg shadow-md">
        <NewStudentForm />
      </div>
    </div>
  );
}

export default CreateStudent;
