import React, { useState, useEffect } from "react";
import { GoPencil } from "react-icons/go";
import { AiOutlineCheck } from "react-icons/ai"; //AiOutlineCheck
import axios from "axios";

function CardStudent({ data }) {

  console.log("data props", data);
  
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    cellphone: "",
    group: "",
    cohort: "",
    instructor: "",
    module: "",
  });
  const [edit, setEdit] = useState({
    name: false,
    lastName: false,
    email: false,
    cellphone: false,
    cohort: false,
    instructor: false,
    group: false,
  });
  // console.log('data student', userData)

  const showEdit = (field) => {
    setEdit({ ...edit, [field]: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    data({ ...data, [name]: value });
  };
   console.log('after hande',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         data)
  const editField = (field) => {
  
    
    // axios.put(`http://localhost:5000/user/student/${data.id}`)
    // .then(resp =>{                                         
    //   console.log(resp)
    // })
    // .catch(e =>{
    //   console.log('error', e)
    // })
    setEdit({ ...edit, [field]: false });
  };

  // console.log("user data", userData);
  return (
    <>
      <div class="w-1/2 rounded-md flex flex-col text-center justify-center ">
        <div class="mb-2  font-bold truncate h-10 mt-5 ">
          <span class="font-bold tracking-wide  text-3xl text-black">
            {`${data.name} ${data.lastName}`}
          </span>
        </div>
        <div className="text-l text-primary mb-2 mt-10  w-full h-16 flex flex-wrap justify-center ">
          <div className="w-3/12 h-full flex flex-row mr-2 ml-2 ">
            {!edit.cohort ? (
              <>
                <GoPencil onClick={() => showEdit("cohort")} />
                <div className="flex flex-col">
                  <p>Cohorte:</p>{" "}
                  {data.cohort === null ? "No tiene cohorte" : data.cohort}
                </div>
              </>
            ) : (
              <>
                <AiOutlineCheck onClick={() => editField("cohort")} />
                <div className="flex flex-col">
                  <p>Cohorte:</p>{" "}
                  <input
                    type="text"
                    name="cohort"
                    value={userData.cohort}
                    onChange={handleChange}
                    className="w-20"
                  />
                </div>
              </>
            )}
            {/* <GoPencil className="m-1" onClick={() => console.log("click")} /> */}
          </div>
          <div className="w-3/12 h-full flex flex-row mr-2 ml-2 ">
            {!edit.instructor ? (
              <>
                <GoPencil onClick={() => showEdit("instructor")} />
                <div className="flex flex-col">
                  <p>Instructor:</p>{" "}
                  {data.instructor === null
                    ? "No tiene instructor"
                    : data.instructor}
                </div>
              </>
            ) : (
              <>
                <AiOutlineCheck onClick={() => editField("instructor")} />
                <div className="flex flex-col">
                  <p>Instructor:</p>{" "}
                  <input
                    type="text"
                    value={userData.instructor}
                    nam="instructor"
                    onChange={handleChange}
                    className="w-20"
                  />
                </div>
              </>
            )}
          </div>
          <div className="w-3/12 h-full flex flex-row mr-2 ml-2 ">
            {!edit.group ? (
              <>
                <GoPencil onClick={() => showEdit("group")} />
                <div className="flex flex-col">
                  <p>Grupo:</p>{" "}
                  {data.group === null ? "No tiene grupo" : data.group}
                </div>
              </>
            ) : (
              <>
                <AiOutlineCheck onClick={() => editField("group")} />
                <div className="flex flex-col">
                  <p>Grupo:</p>{" "}
                  <input
                    type="text"
                    name="group"
                    value={userData.group}
                    className="w-20"
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div class="h-auto w-80 self-center ml-32 mt-10">
          <div className=" flex flex-row w-4/5  justify-left">
            {!edit.name ? (
              <>
                <span name="name" class="font-bold  text-sm text-black mr-2">
                  Nombre: {data.name}
                </span>
                <GoPencil onClick={() => showEdit("name")} />
              </>
            ) : (
              <>
                <span class="font-bold  text-sm text-black mr-2">
                  Nombre:{" "}
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    className="w-20"
                    onChange={handleChange}
                  />
                </span>
                <AiOutlineCheck onClick={() => editField("name")} />
              </>
            )}
          </div>
          <div className=" flex flex-row justify-left">
            {!edit.lastName ? (
              <>
                <span class="font-bold  text-sm text-black mr-2">
                  Apellido: {data.lastName}
                </span>
                <GoPencil onClick={() => showEdit("lastName")} />
              </>
            ) : (
              <>
                <span class="font-bold  text-sm text-black mr-2">
                  Apellido:{" "}
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                    className="w-20"
                  />
                </span>
                <AiOutlineCheck onClick={() => editField("lastName")} />
              </>
            )}
          </div>
          <div className=" flex flex-row justify-left">
            {!edit.email ? (
              <>
                <span class="font-bold  text-sm text-black mr-2">
                  Email: {data.email}
                </span>
                <GoPencil onClick={() => showEdit("email")} />
              </>
            ) : (
              <>
                <span class="font-bold  text-sm text-black mr-2">
                  Email:{" "}
                  <input
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="w-20"
                  />
                </span>
                <AiOutlineCheck onClick={() => editField("email")} />
              </>
            )}
          </div>
          <div className=" flex flex-row justify-left">
            {!edit.cellphone ? (
              <>
                <span class="font-bold  text-sm text-black mr-2">
                  Nro Celular: {data.cellphone}
                </span>
                <GoPencil onClick={() => showEdit("cellphone")} />
              </>
            ) : (
              <>
                <span class="font-bold  text-sm text-black mr-2">
                  Nro Celular:{" "}
                  <input
                    type="text"
                    name="cellphone"
                    value={userData.cellphone}
                    onChange={handleChange}
                    className="w-20"
                  />
                </span>
                <AiOutlineCheck onClick={() => editField("cellphone")} />
              </>
            )}
          </div>
        </div>
        <div className="mt-5"></div>
      </div>
    </>
  );
}

export default CardStudent;
