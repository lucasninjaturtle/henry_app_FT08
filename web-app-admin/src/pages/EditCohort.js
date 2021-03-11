import { useEffect, useState, useCallback } from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import SearchBarAsync from "react-select/async";
import { MdEdit as EditIcon } from "react-icons/md";
import "@inovua/reactdatagrid-community/index.css";
import {
  putStudents,
  searchCohortsByName,
  getStudentsFromCohort,
  getCohortById
} from "../api";

const columns = [
  {
    name: "id",
    minWidth: 70,
    defaultWidth: 70,
    header: "Id",
    editable: false
  },
  {
    name: "name",
    defaultFlex: 1,
    header: "Nombre",
    editable: false
  }
];

function EditCohort() {
  const [selectedCohort, setSelectedCohort] = useState({});
  const [cohortData, setCohortData] = useState({});

  useEffect(() => {
    if (selectedCohort?.value)
      getCohortById(selectedCohort.value).then((resp) => setCohortData(resp));
  }, [selectedCohort]);

  const loadOptions = (inputValue, callback) => {
    if (!inputValue) return;
    searchCohortsByName(inputValue).then((data) => {
      callback(
        data.map((cohort) => ({ label: cohort.name, value: cohort.id }))
      );
    });
  };

  const handleChange = (selectedOption) => setSelectedCohort(selectedOption);

  const {
    name,
    id,
    startDay,
    instructor,
    module,
    students,
    groups
  } = cohortData;
  console.log(groups);

  const date = new Date(startDay);
  const formattedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

  return (
    <div
      className={`px-6 xl:px-14 py-6 md:py-12 h-full flex flex-col overflow-auto ${
        selectedCohort?.value ? "" : "items-center"
      }`}
    >
      <div className="m-auto max-w-7xl w-full">
        <h1
          className={`text-7xl text-center font-light m-auto mb-24 ${
            selectedCohort?.value ? "hidden" : ""
          }`}
        >
          Buscar Cohorte
        </h1>
        <SearchBarAsync
          cacheOptions
          onChange={handleChange}
          isClearable={false}
          loadOptions={loadOptions}
        />
      </div>
      <div
        className={`${
          selectedCohort?.value ? "" : "hidden"
        } flex flex-col mt-16`}
      >
        <div className="w-auto">
          <h1 className="text-6xl underline text-center font-semibold">
            {name}
            <button className="inline-block ml-4 p-1 text-gray-600">
              <EditIcon size="29" />
            </button>
          </h1>
          <small className="text-4xl font-light block text-center">
            ID: {id}
          </small>
        </div>

        <div className="flex mt-16 space-y-5 md:space-y-0 flex-col md:flex-row justify-between">
          <div className="w-auto">
            <h1 className="text-5xl md:text-4xl lg:text-5xl text-center font-semibold">
              Instructor
              <button className="inline-block ml-4 p-1 text-gray-600">
                <EditIcon size="29" />
              </button>
            </h1>
            <h3 className="text-3xl text-4xl font-light block text-center">
              {instructor?.name ?? "Ninguno"}
            </h3>
          </div>
          <div className="w-auto">
            <h1 className="text-5xl md:text-4xl lg:text-5xl text-center font-semibold">
              Fecha de Inicio
              <button className="inline-block ml-4 p-1 text-gray-600">
                <EditIcon size="29" />
              </button>
            </h1>
            <h3 className="text-3xl text-4xl font-light block text-center">
              {formattedDate}
            </h3>
          </div>
          <div className="w-auto">
            <h1 className="text-5xl md:text-4xl lg:text-5xl text-center font-semibold">
              Modulo
              <button className="inline-block ml-4 p-1 text-gray-600">
                <EditIcon size="29" />
              </button>
            </h1>
            <h3 className="text-3xl lg:text-4xl font-light block text-center">
              {module?.name ?? "Ninguno"}
            </h3>
          </div>
        </div>
      </div>

      <div
        className={`${
          selectedCohort?.value ? "" : "hidden"
        } flex flex-col space-y-6 xl:space-y-0 xl:flex-row justify-evenly mt-16`}
      >
        <div className="w-auto">
          <h1 className="text-5xl md:text-4xl lg:text-5xl text-center font-semibold">
            Grupos
          </h1>

          {groups?.length > 0 ? (
            <ReactDataGrid
              idProperty="id"
              editable={true}
              columns={columns}
              style={{
                marginTop: 25,
                minWidth: 600,
                minHeight: 500,
                maxHeight: 750
              }}
              dataSource={groups}
            />
          ) : (
            <h3 className="text-3xl text-4xl font-light block text-center">
              {instructor?.name ?? "Ninguno"}
            </h3>
          )}
        </div>

        <div className="w-auto">
          <h1 className="text-5xl md:text-4xl lg:text-5xl text-center font-semibold">
            Estudiantes
            <button className="inline-block ml-4 p-1 text-gray-600">
              <EditIcon size="29" />
            </button>
          </h1>
          {/* students */}
          {groups?.length > 0 ? (
            <ReactDataGrid
              idProperty="id"
              editable={true}
              columns={columns}
              style={{
                marginTop: 25,
                minWidth: 600,
                minHeight: 500,
                maxHeight: 750
              }}
              dataSource={groups}
            />
          ) : (
            <h3 className="text-3xl text-4xl font-light block text-center">
              {instructor?.name ?? "Ninguno"}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditCohort;
