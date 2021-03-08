import React from "react";
import {useHistory} from 'react-router-dom'

function Dashboard() {
    let history = useHistory();
  return (
    <div class="px-2 mt-36">
      <div class="flex -mx-2 ">
        <div class="w-1/3 px-2">
          <div class="h-auto flex justify-center">
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() =>{history.push('/load-data')}}>
              Cargar CSV alumnos
            </button>
          </div>
        </div>
        <div class="w-1/3 px-2">
          <div class="h-auto flex justify-center">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() =>{history.push('/editCohort')}}>
              Ver alumnos por Cohorte
            </button>
          </div>
        </div>
        <div class="w-1/3 px-2">
          <div class="bg-gray-400 h-12"></div>
        </div>
      </div>
    </div>
    //     <div class="box-border md:box-content self-center bg-gray-300 h-96 w-96">

    // </div>
  );
}

export default Dashboard;
