import React, { useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import * as XLSX from "xlsx";
import axios from "axios";

const customStyles = {
  rows: {
    style: {
      backgroundColor: "red",
    },
  },
};

function LoadCsv() {
  const [columns, setColumns] = useState([])
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    selectedRows:[]
  })

  // process CSV data
  const processData = (dataString) => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    console.log(dataStringLines)
    const headers = dataStringLines[0].split(
      /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
    );

    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(
        /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
      );
      if (headers && row.length == headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] == '"') d = d.substring(1, d.length - 1);
            if (d[d.length - 1] == '"') d = d.substring(d.length - 2, 1);
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
      center: true,
      sortable: true
    }));

    setData(list);
    setColumns(columns);
  };

  // handle file upload
  const handleFileUpload = (e) => {
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

  const handleChange = (state) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log("Selected Rows: ", state.selectedRows);
  };

  return (
    <div className="max-w-full mx-full bg-white rounded-lg overflow-hidden md:full">
      <input type="file" accept=".csv,.xlsx,.xls" onChange={handleFileUpload} />
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Editar</button>

      <DataTable
        pagination
        highlightOnHover
        columns={columns}
        data={data}
        // onRowClicked={() =>console.log('select')} //cuando haces click en una fila
        title="Alumnos Henry"
        selectableRows // add for checkbox selection
        onSelectedRowsChange={handleChange}
        contextMessage={{
          singular:'alumno',
          plural:'alumnos',
          message:'seleccionado'

      }}
      />
    </div>
 
  );
}

export default LoadCsv;
