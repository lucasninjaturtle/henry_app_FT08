import henryLogo from "../../logo_henry3.png";
import {Link} from 'react-router-dom'
import './Manager.css'

export default function Manager(props) {
    let h = props.history

    function handleClickCsv(e, id) {
        e.preventDefault()
        switch (id) {
            case 0: {
                h.push("/load-data/instructores")
                break
            }
            case 1: {
                h.push("/load-data/pms")
                break
            }
            case 2: {
                h.push("/load-data/estudiantes")
                break
            }
            case 3: {
                h.push("/load-data/cohorte")
                break
            }
            default: h.push("/load-data/grupo")
        }
    }

    function handleClickEdit(e, id){
        e.preventDefault();
        switch (id) {
            case 0: {
                h.push("/load-data/instructores")
                break
            }
            case 1: {
                h.push("/load-data/pms")
                break
            }
            case 2: {
                h.push("/edit/student")
                break
            }
            case 3: {
                h.push("/load-data/cohorte")
                break
            }
            case 5: {
                h.push("/edit/event")
                break
            }
            default: h.push("/load-data/grupo")
        }
        
    }

    return (
        <div className="Home">
            <img className="Img" src={henryLogo} alt="Logo"/>
            <h1 className="Titulo"><b>¿Qué vamos a hacer hoy?</b></h1>
            <div className="Container">
                <div className="Card">
                    <h1><b>Subir CSV</b></h1>
                    <span className="Texto">Sube un archivo csv, visualizalo y modificalo antes de cargarlo en la base de datos</span>
                    <div className="Botones">
                        {/* <button onClick={e => handleClickCsv(e, 0)} className="Btn">Estudiantes</button>
                        <button className="Btn">Cohorte</button>
                        <button className="Btn">Grupo</button>
                        <button className="Btn">Calificaciones</button> */}
                        
                        <button onClick={e => handleClickCsv(e, 0)} className="Btn">Instructores</button>
                        <button onClick={e => handleClickCsv(e, 1)} className="Btn">PMs</button>
                        <button onClick={e => handleClickCsv(e, 2)} className="Btn">Estudiante</button>
                        <button onClick={e => handleClickCsv(e, 3)} className="Btn">Cohorte</button>
                        <button onClick={e => handleClickCsv(e, 4)} className="Btn">Grupo</button>
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
                        <button className="Btn">Evento</button>
                    </div>
                </div>

                <div className="Card">
                    <h1><b>Editar</b></h1>
                    <span className="Texto">Modifica todo lo que tengas que modificar!</span>
                    <div className="Botones">
                        <button onClick={e => handleClickEdit(e, 0)} className="Btn">Instructores</button>
                        <button onClick={e => handleClickEdit(e, 1)} className="Btn">PMs</button>
                        <button onClick={e => handleClickEdit(e, 2)} className="Btn">Estudiante</button>
                        <button onClick={e => handleClickEdit(e, 3)} className="Btn">Cohorte</button>
                        <button onClick={e => handleClickEdit(e, 4)} className="Btn">Grupo</button>
                        <button onClick={e => handleClickEdit(e, 5)} className="Btn">Evento</button>
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