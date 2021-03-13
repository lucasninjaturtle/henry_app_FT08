import { useState } from "react";
import TitleAndSearchBar from "./TitleAndSearchBar";
import { getInstructorById } from "../../api";
import { useQuery } from "react-query";
import EditableProperty from "./EditableProperty";
import NonEditableTitle from "./NonEditableTitle";
import Loader from "react-loader-spinner";

function EditInstructor() {
  const [selectedInstructor, setSelectedInstructor] = useState();
  const { data: instructorData = {}, isLoading } = useQuery(
    ["instructor", selectedInstructor],
    () => getInstructorById(selectedInstructor),
    { enabled: !!selectedInstructor }
  );

  return (
    <div
      className={`px-6 xl:px-14 py-6 md:py-12 h-full flex flex-col overflow-auto ${
        selectedInstructor?.value ? "" : "items-center"
      }`}
    >
      <TitleAndSearchBar
        thing="Instructor"
        onSearch={(data) =>
          data.map((instructor) => ({
            label: instructor.name + " " + instructor.lastName,
            value: instructor.id
          }))
        }
        onSelect={(obj) => setSelectedInstructor(obj.value)}
      />
      {/* {JSON.stringify(instructorData)} */}

      {!isLoading && Object.keys(instructorData).length > 0 ? (
        <div className="flex flex-col gap-2 mt-5 justify-items-stretch">
          <NonEditableTitle
            title={instructorData.name + " " + instructorData.lastName}
            subtitle={`ID: ${instructorData.id}`}
          />
          <div className="mt-5">
            <EditableProperty
              id={instructorData.id}
              data={instructorData.name}
              propType="name"
              name="Nombre"
            />
            <EditableProperty
              id={instructorData.id}
              data={instructorData.lastName}
              propType="lastName"
              name="Apellido"
            />
            <EditableProperty
              id={instructorData.id}
              data={instructorData.email}
              propType="email"
              type="email"
              name="Email"
            />
            <EditableProperty
              id={instructorData.id}
              type="number"
              data={instructorData.cellphone}
              propType="cellphone"
              name="Celular"
            />
          </div>
        </div>
      ) : (
        selectedInstructor && (
          <div className="h-full w-full grid place-items-center">
            <Loader type="ThreeDots" color="black" height={100} width={100} />
          </div>
        )
      )}
    </div>
  );
}

export default EditInstructor;
