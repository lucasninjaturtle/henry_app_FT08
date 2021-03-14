import React, { useState } from "react";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import axios from "axios";

function getUploadType(type) {
  switch (type) {
    case "student":
      return "estudiante";
    case "cohort":
      return "cohorte";
    case "pm":
      return "project manager";
    case "instructor":
      return "instructor";
    case "event":
      return "evento";
    case "group":
      return "grupo";
    default:
      return type;
  }
}

function LoadCsv(props) {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [clearRows, setClearRows] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  let uploadType = getUploadType(props.match.params.type);
  //componente contextAction
  function ContextAction({ userToDelete }) {
    // console.log('user to delete', userToDelete)
    const stringUser = userToDelete.toString();
    // console.log('string user',stringUser)
    function onDelete() {
      if (window.confirm(`Seguro quiere eliminar a: ${stringUser}`)) {
        // console.log('confirmo')
        var newData = data.filter((user) => !userToDelete.includes(user.name));
        var newSelected = selectedRows.filter(
          (user) => !userToDelete.includes(user.name)
        );
        setData(newData);
        setSelectedRows(newSelected);
        setClearRows(true);
      }
    }
    return (
      <button
        className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-red rounded"
        onClick={onDelete}
      >
        Eliminar
      </button>
    );
  }

  // process CSV data
  const processData = (dataString) => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(
      /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
    );

    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(
        /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
      );
      if (headers && row.length === headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] === '"') d = d.substring(1, d.length - 1);
            if (d[d.length - 1] === '"') d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter((x) => x).length > 0) {
          list.push(obj);
        }
      }
    }

    // prepare columns list from headers
    const columns = headers.map((c) => ({
      name: c,
      selector: c,
      sortable: true
    }));

    setData(list);
    setColumns(columns);
  };

  // handle file upload
  const handleFileUpload = (e) => {
    const uploadedAFile = !!e.target.files[0];
    if (!uploadedAFile) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };
    reader.readAsBinaryString(file);
  };

  const handleChange = (e) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    // console.log("Selected Rows: ", e.selectedRows);
    setClearRows(false);
    setSelectedRows(e.selectedRows);
  };

  // console.log(state.selectedRows)
  const sendStudentData = () => {
    if (selectedRows.length === 0) {
      alert("No hay alumnos cargados");
    } else {
      let baseUrl = "http://localhost:5000";
      axios
        .post(`${baseUrl}/${props.match.params.type}/bulk`, selectedRows)
        .then((res) => {
          alert(`${uploadType}(s) creado(s)`);
          setClearRows(true);
          setSelectedRows([]);
        })
        .catch((e) => alert("Algo fue mal"));
    }
  };

  return (
    <div className="h-full w-full flex px-2 py-5">
      <div className="m-auto flex flex-col flex-around">
        <input
          accept=".csv,.xlsx,.xls"
          className="hidden"
          onChange={handleFileUpload}
          id="file"
          type="file"
        />
        <div className="flex flex-row justify-around">
          <label htmlFor="file" className="inline-block">
            <span
              className={`inline-block text-3xl select-none cursor-pointer rounded-xl ${
                data.length === 0
                  ? "bg-black text-white"
                  : "border border-black"
              } px-9 py-4`}
            >
              Subir CSV de {uploadType}
            </span>
          </label>
          {data.length > 0 && (
            <button
              onClick={sendStudentData}
              className={`inline-block text-3xl select-none cursor-pointer bg-black text-white rounded-xl px-9 py-2`}
            >
              Subir Datos
            </button>
          )}
        </div>

        {data.length > 0 && (
          <div className="max-w-full mt-12 mx-full bg-white rounded-lg overflow-hidden md:full">
            <DataTable
              pagination
              highlightOnHover
              columns={columns}
              data={data}
              selectableRows // add for checkbox selection
              onSelectedRowsChange={handleChange}
              clearSelectedRows={clearRows}
              contextActions={
                <ContextAction
                  userToDelete={selectedRows.map((user) => user.name)}
                />
              }
              contextMessage={{
                singular: "alumno",
                plural: "alumnos",
                message: "seleccionado"
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default LoadCsv;
