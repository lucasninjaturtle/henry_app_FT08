import React, { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [dataFile, setDataFile] = useState(null);
  const [showAlert, setShowAlert] = React.useState(false);


  //x-data="{ show: true }" x-show="show"
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", dataFile);

    axios.post("http://localhost:3001/csv", data).then((res) => {
      console.log(res);
      setShowAlert(true)
      return
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="py-20 h-screen px-2">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
          <div className="md:flex">
            <div className="w-full">
              <div className="p-4 border-b-2">
                {" "}
                <span className="text-lg font-bold text-gray-600">
                  Cargar documento
                </span>{" "}
              </div>
              <div className="p-3">
                {/* <div className="mb-2"> <span className="text-sm">Title</span> <input type="text" className="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"/> </div> */}
                <div className="mb-2">
                  <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                    <div className="absolute">
                      <div className="flex flex-col items-center ">
                        {" "}
                        <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>{" "}
                        <span className="block text-gray-400 font-normal">
                          Adjunta tus archivos aqui
                        </span>{" "}
                        <span className="block text-gray-400 font-normal">
                          or
                        </span>{" "}
                        <span className="block text-blue-400 font-normal">
                          Browse files
                        </span>{" "}
                      </div>
                    </div>{" "}
                    <input
                      type="file"
                      className="h-full w-full opacity-0"
                      name="file"
                      accept=".csv"
                      onChange={(e) => setDataFile(e.target.files[0])}
                    />
                  </div>
                  <div className="flex justify-between items-center text-gray-400">
                    {" "}
                    <span>Cargar solo archivos tipo .csv</span>{" "}
                  </div>
                </div>
                <div className="mt-3 text-center pb-3">
                  {" "}
                  <button
                    type="submit"
                    className="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700"
                  >
                    Cargar
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {showAlert ? (
        <div
          className={
            "text-white px-6 py-4 border-0 rounded relative mb-4 bg-5 00"
          }
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">{color}!</b> This is a {color} alert -
            check it out!
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null} */}
     
    </form>
    
    
  );
}

export default Dashboard;
