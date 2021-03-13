import { useState } from "react";
import TitleAndSearchBar from "./TitleAndSearchBar";
import { getInstructorById } from "../../api";
import { useQuery } from "react-query";

function EditInstructor() {
  const [selectedInstructor, setSelectedInstructor] = useState();

  return (
    <div
      className={`px-6 xl:px-14 py-6 md:py-12 h-full flex flex-col overflow-auto ${
        selectedInstructor?.value ? "" : "items-center"
      }`}
    >
      <TitleAndSearchBar
        onSearch={(data) =>
          data.map((instructor) => ({
            label: instructor.name + " " + instructor.lastName,
            value: instructor.id
          }))
        }
        onSelect={(obj) => setSelectedInstructor(obj.value)}
      />
      {JSON.stringify(selectedInstructor)}
    </div>
  );
}

export default EditInstructor;
