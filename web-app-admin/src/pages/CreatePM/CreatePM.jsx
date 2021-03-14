import React from "react";
import NewPmForm from "../../components/NewPmForm/NewPmForm";

function CreatePM() {
  return (
    <div className="h-full w-full flex">
      <div className="m-auto w-full max-w-lg shadow-md">
        <NewPmForm />
      </div>
    </div>
  );
}

export default CreatePM;
