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
function Title({type}) {
  return(
    <h1 style={{textAlign:'end'}}>Estas subiendo {type}</h1>
  )
}


function LoadCsv(props) {
  const [columns, setColumns] = useState([])
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    selectedRows:[]
  })

  let type = props.match.params.type
  //componente contextAction
  function ContextAction({userToDelete}){
    console.log('user to delete', userToDelete)
    const stringUser = userToDelete.toString()
    // console.log('string user',stringUser)
    function onDelete() {
      if(window.confirm(`Seguro quiere eliminar a: ${stringUser}`)){
        console.log('confirmo')
        var newData = data.filter(user => !userToDelete.includes(user.Name))
        setData(newData)
      }else{
        console.log('no confirmo')
      }
    }
    return (
      <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-red rounded"
      onClick={onDelete}
      >
      Eliminar
    </button>

  )
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
      sortable: true
    }));

    setData(list);
    console.log("Lista:", list)
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

  const handleChange = (e) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log("Selected Rows: ", e.selectedRows);
    setState({selectedRows: e.selectedRows})
  };

  const sendStudentData = () =>{
    if (state.selectedRows.length == 0){
      alert('No hay alumnos cargados')
    }
    else {
      console.log("Seleccionados: ", state.selectedRows)
      console.log("Type: ", type)
      let ruta = 'http://localhost:5000/'
      switch (type) {
        //case "usuarios": ruta += "user"; break;
        case "pm": ruta += "pm/bulk"; break;
        case "student": ruta += "student/bulk"; break;
        case "cohort": ruta += "cohort/bulk"; break;
        default: ruta += "grupo/create"; break;
      }
      axios.post(ruta, state.selectedRows)
      .then(res => {
        console.log("Res: ", res)
      }).catch(e => console.log("Error: ", e))
    }

  }


  return (
    <div className="max-w-full mx-full bg-white rounded-lg overflow-hidden md:full">
      <input type="file" accept=".csv,.xlsx,.xls" onChange={handleFileUpload} style={{margin:'40px'}} />
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={sendStudentData}
        disabled={data.length == 0}
      >
        Cargar CSV</button>

      <DataTable
        pagination
        highlightOnHover
        columns={columns}
        data={data}
        title={<Title type={type}/>}
        selectableRows // add for checkbox selection
        onSelectedRowsChange={handleChange}
        contextActions={<ContextAction userToDelete={state.selectedRows.map(user=>  user.Name)}/>}
        contextMessage={{
          singular:'alumno',
          plural:'alumnos',
          message:'seleccionado'
      }}
      noDataComponent='No hay nada que mostrar'
      />
    </div>
 
  );
}

export default LoadCsv;
