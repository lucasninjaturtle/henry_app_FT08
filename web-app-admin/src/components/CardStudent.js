import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import { AiOutlineCheck } from "react-icons/ai"; //AiOutlineCheck
import axios from "axios";

function CardStudent({ data }) {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    cellphone: "",
    groupId: "",
    cohortId: "",
    instructor: "",
    module: ""
  });
  const [edit, setEdit] = useState({
    name: false,
    lastName: false,
    email: false,
    cellphone: false,
    cohortId: false,
    instructor: false,
    groupId: false
  });
  // console.log('data student', userData)

  const showEdit = (field) => {
    setEdit({ ...edit, [field]: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    console.log(name);
    data[name] = value;
    setUserData({ ...userData, [name]: value });
  };
  console.log("data en los input (data)", data);
  const editField = (field) => {
    axios
      .put(`http://localhost:5000/user/student/${data.id}`, data)
      .then((resp) => {
        console.log(resp);
        // window.location.reload()
      })
      .catch((e) => {
        console.log("error", e);
      });
    setEdit({ ...edit, [field]: false });
    setUserData({ ...userData, [field]: "" });
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
            {!edit.cohortId ? (
              <>
                <GoPencil onClick={() => showEdit("cohortId")} />
                <div className="flex flex-col">
                  <p>Cohorte:</p>{" "}
                  {data.cohortId === null ? "No tiene cohorte" : data.cohortId}
                </div>
              </>
            ) : (
              <>
                <AiOutlineCheck onClick={() => editField("cohortId")} />

                <div className="flex flex-col">
                  <p>Cohorte:</p>{" "}
                  <input
                    type="text"
                    name="cohortId"
                    value={userData.cohortId}
                    onChange={handleChange}
                    className="w-20"
                  />
                </div>
              </>
            )}
            {/* <GoPencil className="m-1" onClick={() => console.log("click")} /> */}
          </div>
          <div className="w-3/12 h-full flex flex-row mr-2 ml-2 ">
            <div className="flex flex-col">
              <p>Instructor:</p>{" "}
              {data.instructor === null
                ? "No tiene instructor"
                : data.instructor}
            </div>
          </div>
          <div className="w-3/12 h-full flex flex-row mr-2 ml-2 ">
            {!edit.groupId ? (
              <>
                <GoPencil onClick={() => showEdit("groupId")} />
                <div className="flex flex-col">
                  <p>Grupo:</p>{" "}
                  {data.groupId === null ? "No tiene grupo" : data.groupId}
                </div>
              </>
            ) : (
              <>
                <AiOutlineCheck onClick={() => editField("groupId")} />

                <div className="flex flex-col">
                  <p>Grupo:</p>{" "}
                  <input
                    type="text"
                    name="groupId"
                    value={userData.groupId}
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
