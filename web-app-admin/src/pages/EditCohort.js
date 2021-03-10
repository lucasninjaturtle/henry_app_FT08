import { useEffect, useState, useCallback } from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import SearchBarAsync from "react-select/async";
import "@inovua/reactdatagrid-community/index.css";
import {
  putStudents,
  searchCohortsByName,
  getStudentsFromCohort
} from "../api";

function EditCohort() {
  const [selectCohort, setSelectedCohort] = useState({});
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

  return (
    <div className="h-full flex items-center" style={{ padding: "50px 70px" }}>
      <div className="w-full max-w-7xl block mx-auto -mt-14">
        <h1
          className={`text-7xl text-center font-light m-auto mb-24 ${
            selectCohort?.value ? "hidden" : ""
          }`}
        >
          Buscar Cohorte
        </h1>
        {/* <div className="w-full"> */}
        <SearchBarAsync
          // styles={customStyles}
          cacheOptions
          onChange={handleChange}
          isClearable={true}
          loadOptions={loadOptions}
        />
      </div>
      {/* </div> */}
      {/* <select
        onChange={(e) =>
          getStudentsFromCohort(e.target.value).then((resp) => {
            setStudentsData({ ...studentsData, rows: resp });
            setOriginalStudentsData(resp);
          })
        }
      >
        <option defaultValue></option>
        {cohortsList.map((cohort, i) => (
          <option value={cohort.id} key={cohort.id}>
            {cohort.name}
          </option>
        ))}
      </select>
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
