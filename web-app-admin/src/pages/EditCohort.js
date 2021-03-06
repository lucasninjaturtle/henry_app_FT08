import { useEffect, useState } from "react";
import { getCohorts, getStudentsFromCohort } from "../api";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

// cohortId: 1
// createdAt: "2021-03-06T00:27:11.020Z"
// github: "Jeffery-cf6"
// groupId: null
// id: 11
// updatedAt: "2021-03-06T00:50:26.077Z"
// userId: 11

function EditCohort() {
  const [cohortsList, setCohortsList] = useState([]);
  const [studentsData, setStudentsData] = useState({
    columns: [
      { name: "id", minWidth: 70, defaultWidth: 70, header: "Id" },
      {
        name: "github",
        defaultFlex: 1,
        header: "Github"
      },
      { name: "name", defaultFlex: 1, header: "First name" },
      { name: "lastName", defaultFlex: 1, header: "Last name" },
      { name: "email", defaultFlex: 1, header: "Email" },
      { name: "cellphone", defaultFlex: 1, header: "Cellphone" },
      { name: "groupId", minWidth: 150, defaultWidth: 150, header: "Group Id" },
      {
        name: "cohortId",
        minWidth: 150,
        defaultWidth: 150,
        header: "Cohort Id"
      }
    ],
    rows: []
  });

  useEffect(() => {
    getCohorts().then((data) => setCohortsList(data));
  }, []);

  return (
    <div>
      <select
        onChange={(e) =>
          getStudentsFromCohort(e.target.value).then((resp) => {
            setStudentsData({ ...studentsData, rows: resp });
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
      <ReactDataGrid
        columns={studentsData.columns}
        style={{ minHeight: 500 }}
        dataSource={studentsData.rows}
      />
    </div>
  );
}

export default EditCohort;
