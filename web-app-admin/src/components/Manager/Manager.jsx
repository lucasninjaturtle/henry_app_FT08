import henryLogo from "../../logo_henry3.png";
import {Link} from 'react-router-dom'
import './Manager.css'

export default function Manager() {
    return (
        <div className="Home">
            <img className="Img" src={henryLogo} alt="Logo"/>
            <h1 className="Titulo"><b>¿Qué vamos a hacer hoy?</b></h1>
            <div className="Container">
                <div className="Card">
                    <h1><b>Subir CSV</b></h1>
                    <span className="Texto">Sube un archivo csv, visualizalo y modificalo antes de cargarlo en la base de datos</span>
                    <div className="Botones">
                        <button className="Btn">Estudiantes</button>
                        <button className="Btn">Cohorte</button>
                        <button className="Btn">Grupo</button>
                        <button className="Btn">Calificaciones</button>
                    </div>
                </div>

                <div className="Card">
                    <h1><b>Crear</b></h1>
                    <span className="Texto">Dale vida a Henry!</span>
                    <div className="Botones">
                        <button className="Btn">Instructores</button>
                        <button className="Btn">PMs</button>
                        <button className="Btn">Estudiante</button>
                        <button className="Btn">Cohorte</button>
                        <button className="Btn">Grupo</button>
                    </div>
                </div>

                <div className="Card">
                    <h1><b>Editar</b></h1>
                    <span className="Texto">Modifica todo lo que tengas que modificar!</span>
                    <div className="Botones">
                        <button className="Btn">Instructores</button>
                        <button className="Btn">PMs</button>
                        <button className="Btn">Estudiante</button>
                        <button className="Btn">Cohorte</button>
                        <button className="Btn">Grupo</button>
                    </div>
                </div>

                <div className="Card">
                    <h1><b>Eliminar</b></h1>
                    <span className="Texto">Subiste algo mal, o alguien se fue? Borralo!</span>
                    <div className="Botones">
                        <button className="Btn">Instructores</button>
                        <button className="Btn">PMs</button>
                        <button className="Btn">Estudiante</button>
                        <button className="Btn">Cohorte</button>
                        <button className="Btn">Grupo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}