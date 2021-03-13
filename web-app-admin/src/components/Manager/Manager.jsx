import henryLogo from "../../logo_henry3.png";
import Card from "./Card";
import "./Manager.css";

export default function Manager(props) {
  return (
    <div className="p-16 flex flex-col overflow-auto h-full">
      <div className=" my-auto">
        <div>
          <img
            className="max-w-md block mx-auto -mt-10"
            src={henryLogo}
            alt="Logo"
          />
          <h1 className="block mt-9 text-6xl font-semibold underline text-center">
            ¿Qué vamos a hacer hoy?
          </h1>
        </div>
        <div className="mt-16 xl:mt-12 flex flex-col content-center xl:flex-row justify-center gap-10 items-stretch xl:items-end space-y-10 xl:space-y-0 xl:justify-between mx-auto flex-wrap max-w-7xl w-full">
          <Card
            action="load"
            title={"Subir CSV"}
            description={
              "Sube un archivo csv, visualizalo y modificalo antes de cargarlo en la base de datos"
            }
          />

          <Card
            action="create"
            title={"Crear"}
            description={"Dale vida a Henry!"}
          />

          <Card
            action="edit"
            title={"Editar"}
            description={"Modifica todo lo que tengas que modificar!"}
          />

          <Card
            action="delete"
            title={"Eliminar"}
            description={"Subiste algo mal, o alguien se fue? Borralo!"}
          />
        </div>
      </div>
    </div>
  );
}
