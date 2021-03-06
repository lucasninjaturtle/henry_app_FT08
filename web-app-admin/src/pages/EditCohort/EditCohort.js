import { useEffect, useState } from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import SearchBarAsync from "react-select/async";
import "@inovua/reactdatagrid-community/index.css";
import { useQuery } from "react-query";
import CohortName from "./CohortName";
import StartDate from "./StartDate";
import { searchCohortsByName, getCohortById } from "../../api";
import InstructorName from "./InstructorName";
import Loader from "react-loader-spinner";
import ModuleName from "./ModuleName";
import Groups from "./Groups.jsx";

const studentColumns = [
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
  },
  {
    name: "lastName",
    defaultFlex: 1,
    header: "Apellido",
    editable: false
  }
];

function EditCohort() {
  const [selectedCohort, setSelectedCohort] = useState({});
  const { data: cohortData = {}, refetch, isLoading } = useQuery(
    ["cohort", selectedCohort?.value],
    () => getCohortById(selectedCohort.value),
    { enabled: !!selectedCohort?.value }
  );

  useEffect(() => {
    if (selectedCohort?.value) refetch();
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
    students = [],
    groups = []
  } = cohortData;

  return (
    <div
      className={`px-6 xl:px-14 py-6 md:py-12 h-full flex flex-col overflow-auto ${
        selectedCohort?.value ? "" : "items-center"
      }`}
    >
      <div
        className={`${
          selectedCohort?.value ? "" : "my-auto"
        } mx-auto max-w-7xl w-full`}
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
      </div>
      {!isLoading && Object.keys(cohortData).length > 0 ? (
        selectedCohort?.value ? (
          <>
            <div className="flex flex-col mt-16">
              <CohortName name={name} id={id} />

              <div className="flex mt-16 gap-y-10 md:space-y-0 flex-col md:flex-row justify-between xl:justify-evenly">
                <InstructorName instructor={instructor} id={id} />
                <StartDate startDay={startDay} id={id} />
                <ModuleName module={module} id={id} />
              </div>
            </div>
            <div
              className={
                "flex flex-col space-y-6 xl:space-y-0 xl:flex-row justify-evenly mt-16"
              }
            >
              <Groups data={groups} />

              <div className="w-auto">
                <h1 className="text-5xl md:text-4xl lg:text-5xl text-center font-semibold">
                  Estudiantes
                </h1>
                <ReactDataGrid
                  idProperty="id"
                  editable={true}
                  // checkboxColumn
                  columns={studentColumns}
                  defaultFilterValue={[
                    {
                      name: "name",
                      operator: "contains",
                      type: "string",
                      value: ""
                    },
                    {
                      name: "lastName",
                      operator: "contains",
                      type: "string",
                      value: ""
                    }
                  ]}
                  style={{
                    marginTop: 25,
                    minWidth: 500,
                    minHeight: 500,
                    maxHeight: 750
                  }}
                  dataSource={students}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="h-full w-full grid place-items-center text-5xl">
            No existe ese cohorte
          </div>
        )
      ) : (
        selectedCohort?.value && (
          <div className="h-full w-full grid place-items-center">
            <Loader type="ThreeDots" color="black" height={100} width={100} />
          </div>
        )
      )}
    </div>
  );
}

export default EditCohort;
