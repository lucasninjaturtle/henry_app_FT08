import React from "react";
import NewGroupForm from "../../components/NewGroupForm/NewGroupForm";

function CreateCohort() {
  return (
    <div className="h-full w-full flex">
      <div className="m-auto w-full max-w-lg shadow-md">
        <NewGroupForm />
      </div>
    </div>
  );
}

export default CreateCohort;
