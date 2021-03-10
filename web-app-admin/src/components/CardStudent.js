import React from "react";

function CardStudent({ data }) {
  console.log("data desde card", data);
  console.log(Object.values(data));
  return (
    <>
      {Object.keys(data) === "" ? (
        <div></div>
      ) : (
        <div class="rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-sm bg-white h-96">
          <div class="w-screen flex flex-col text-center bg-gray-300">
            <p class="text-base mb-2 font-bold truncate">Editar Estudiante</p>

            <div class="text-xs text-primary mb-2">
              <span class="font-bold tracking-wide text-sm text-black">
                Nombre: {data.name}
              </span>
            </div>
            <div class="text-xs text-primary mb-2">
              <span class="font-bold tracking-wide text-sm text-black">
                Apellido: {data.lastName}
              </span>
            </div>
            <div class="text-xs text-primary mb-2">
              <span class="font-bold tracking-wide text-sm text-black">
                Github: {data.github}
              </span>
            </div>
            <div class="text-xs text-primary mb-2">
              <span class="font-bold tracking-wide text-sm text-black">
                Cohorte: {!data.cohort ? "No tiene cohorte" : data.cohort}
              </span>
            </div>
            <div class="text-xs text-primary mb-2">
              <span class="font-bold tracking-wide text-sm text-black">
                Instructor:{" "}
                {!data.instructor ? "No tiene Instructor" : data.instructor}
              </span>
            </div>
            <div class="text-xs text-primary mb-2">
              <span class="font-bold tracking-wide text-sm text-black">
                Grupo: {!data.group ? "No tiene grupo" : data.group}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardStudent;
