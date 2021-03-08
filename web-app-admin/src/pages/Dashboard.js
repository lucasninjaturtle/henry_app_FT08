import React from "react";
import { useHistory } from "react-router-dom";

function Dashboard() {
  let history = useHistory();
  return (
    <div class="px-2 mt-36">
      <div class="flex -mx-2 ">
        <div class="w-1/3 px-2">
          <div class="h-auto flex justify-center">
            <button
              class="bg-transparent h-50 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                history.push("/load-data");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Cargar CSV alumnos
            </button>
          </div>
        </div>
        <div class="w-1/3 px-2">
          <div class="h-auto flex justify-center">
            <button
              class="bg-transparent h-50 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                history.push("/editCohort");
              }}
            >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
</svg>
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
