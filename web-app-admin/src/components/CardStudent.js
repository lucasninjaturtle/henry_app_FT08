import React from "react";
import { GoPencil } from "react-icons/go";

function CardStudent({ data }) {
  return (
    <>
      {Object.keys(data) === "" ? (
        <div></div>
      ) : (
        <div class="w-1/2 rounded-md flex flex-col text-center justify-center ">
          <div class="mb-2 font-bold truncate h-10 mt-5 ">
            <span class="font-bold tracking-wide  text-3xl text-black">
              {`${data.name} ${data.lastName}`}
            </span>
          </div>
          <div className="text-l text-primary mb-2 mt-10  w-full h-16 flex flex-wrap justify-center ">
            <div className="w-3/12 h-full flex flex-row mr-2 ml-2 ">
              <GoPencil className="m-1" onClick={() => console.log("click")} />

              <div className="flex flex-col">
                <p>Cohorte:</p>{" "}
                {data.cohort === null ? "No tiene cohorte" : data.cohort}
              </div>
            </div>
            <div className="w-3/12 h-full flex flex-row mr-2 ml-2 ">
              <GoPencil className="m-0" />
              <div className="flex flex-col">
                <p>Instructor:</p>
                {data.instructor === null
                  ? "No tiene Instructor"
                  : data.instructor}
              </div>
            </div>
            <div className="w-3/12 h-full flex flex-row mr-2 ml-2 ">
              <GoPencil className="m-0" />
              <div className="flex flex-col">
                <p>Grupo:</p>
                {data.group === null ? "No tiene grupo" : data.group}
              </div>
            </div>
          </div>

          <div class="h-auto w-80 self-center ml-32 mt-20">
            <div className=" flex flex-row w-4/5  justify-left">
              <span class="font-bold  text-sm text-black mr-2">
                Nombre: {data.name}
              </span>
              <GoPencil />
            </div>
            <div className=" flex flex-row justify-left">
              <span class="font-bold  text-sm text-black mr-2">
                Apellido: {data.lastName}
              </span>
              <GoPencil />
            </div>
            <div className=" flex flex-row justify-left">
              <span class="font-bold tracking-wide text-sm text-black mr-2 ">
                Email: {data.email}
              </span>
              <GoPencil />
            </div>
            <div className=" flex flex-row justify-left">
              <span class="font-bold tracking-wide text-sm text-black mr-2 ">
                Nro Celular: {data.cellphone}
              </span>
              <GoPencil />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardStudent;
