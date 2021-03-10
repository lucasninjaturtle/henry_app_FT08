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

const columns = {
  name: "id",
  minWidth: 70,
  defaultWidth: 70,
  header: "Id",
  editable: false
};

function EditCohort() {
  const [selectedCohort, setSelectedCohort] = useState({});
  const [cohortData, setCohortData] = useState({});

  useEffect(() => {
    if (selectedCohort?.value)
      getCohortById(selectedCohort.value).then((resp) => setCohortData(resp));
  }, [selectedCohort]);
  // const [cohortsList, setCohortsList] = useState([]);
  // const [originalStudentsData, setOriginalStudentsData] = useState([]);
  // const [studentsData, setStudentsData] = useState({
  //   columns: [
  //     {
  //       name: "id",
  //       minWidth: 70,
  //       defaultWidth: 70,
  //       header: "Id",
  //       editable: false
  //     },
  //     {
  //       name: "github",
  //       defaultFlex: 1,
  //       header: "Github"
  //     },
  //     { name: "name", defaultFlex: 1, header: "First name" },
  //     { name: "lastName", defaultFlex: 1, header: "Last name" },
  //     { name: "email", defaultFlex: 1, header: "Email" },
  //     { name: "cellphone", defaultFlex: 1, header: "Cellphone" },
  //     { name: "groupId", minWidth: 150, defaultWidth: 150, header: "Group Id" },
  //     {
  //       name: "cohortId",
  //       minWidth: 150,
  //       defaultWidth: 150,
  //       header: "Cohort Id"
  //     }
  //   ],
  //   rows: []
  // });

  // const onEditComplete = useCallback(
  //   ({ value, columnId, rowIndex }) => {
  //     const data = [...studentsData.rows];
  //     data[rowIndex][columnId] = value;
  //     putStudents(data);

  //     setStudentsData({ ...studentsData, rows: data });
  //   },
  //   [studentsData]
  // );

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
      className={`h-full flex ${selectedCohort?.value ? "" : "items-center"}`}
      style={{ padding: "50px 70px" }}
    >
      <div
        className={`w-full max-w-7xl block mx-auto  ${
          selectedCohort?.value ? "" : "-mt-14"
        }`}
      >
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
          } flex flex-row justify-between mt-16`}
        >
          <div className="w-auto">
            <h1 className="text-5xl md:text-4xl lg:text-5xl text-center font-semibold">
              Grupos
              <button className="inline-block ml-4 p-1 text-gray-600">
                <EditIcon size="29" />
              </button>
            </h1>

            {groups?.length > 0 ? (
              <ReactDataGrid
                idProperty="id"
                editable={true}
                // onEditComplete={onEditComplete}
                columns={columns}
                style={{ minHeight: 500 }}
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
            <h3 className="text-3xl text-4xl font-light block text-center">
              {instructor?.name ?? "Ninguno"}
            </h3>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* 
      {studentsData.rows.length > 0 && (
        <ReactDataGrid
          idProperty="id"
          editable={true}
          onEditComplete={onEditComplete}
          columns={studentsData.columns}
          style={{ minHeight: 500 }}
          dataSource={studentsData.rows}
        />
      )} */}
    </div>
  );
}

export default EditCohort;
