import henryLogo from "../../logo_henry3.png";
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
import './Manager.css'
import { useState } from "react";

Modal.setAppElement('#root')

const customStyles = {
    content: {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

export default function Manager(props) {
    let h = props.history
    const [state, setState] = useState({
        createCohortModal: false
    })

    function handleClickCsv(e, id) {
        e.preventDefault()
        switch (id) {
            case 0: {
                h.push("/load-data/usuarios")
                break
            }
            case 3: {
                h.push("/load-data/cohorte")
                break
            }
            default: h.push("/load-data/grupo")
        }
    }

    function handleClickCreate(e, id) {
        switch (id) {
            case 0: {
                setState({...state, createCohortModal: true})
            }
        }
    }

    function createCohort(e) {
        e.preventDefault()
        console.log("Estado: ", state)
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
                        
                        <button onClick={e => handleClickCsv(e, 0)} className="Btn">Usuarios</button>
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
                        <button className="Btn" onClick={e => handleClickCreate(e, 0)}>Cohorte</button>
                        <button className="Btn" onClick={e => handleClickCreate(e, 1)}>Grupo</button>
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

            <Modal isOpen={state.createCohortModal}
            // shouldCloseOnOverlayClick={false}
            onRequestClose={e => {
                e.preventDefault()
                setState({...state, createCohortModal: false})
            }}
            style={customStyles}>
                <div className="modalContainer">
                    <h1>Elige el nombre de la nueva cohorte:</h1>
                    <div>
                        <input onChange={e => {
                            // e.preventDefault()
                            setState({...state, createCohortInput: e.target.value})
                        }} type="text"/>
                        <button onClick={e => createCohort(e)}>Create</button>
                    </div>
                    <h1>Elige un instructor para esta cohorte:</h1>
                    <div>
                        <input onChange={e => {
                            // e.preventDefault()
                            setState({...state, createCohortInput: e.target.value})
                        }} type="text"/>
                        <button onClick={e => createCohort(e)}>Create</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}