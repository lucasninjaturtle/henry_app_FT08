import { useEffect } from "react";
import henryLogo from "../../logo_henry3.png";
<<<<<<< HEAD
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
=======
import Card from "./Card";
import "./Manager.css";

export default function Manager() {
  useEffect(() => {
    document.title = "Henry App";
  }, []);

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
            customs={[{text:'PM', link: 'pm'}]}
          />
>>>>>>> 3b716f23ad61f0cbf6e9596b896a046a2901fac5

          <Card
            action="create"
            title={"Crear"}
            description={"Dale vida a Henry!"}
            customs={[{text:'Instructor', link: 'instructor'}, {text: 'Evento', link: 'event'}, {text: 'Tipo de evento', link: 'type'}]}
          />

<<<<<<< HEAD
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
=======
          <Card
            action="edit"
            title={"Editar o Eliminar"}
            description={"Modifica o elimina todo lo que tengas que hacer respectivamente!"}
            customs={[{text:'Instructor', link: 'instructor'}, {text: 'Evento', link: 'event'}]}
          />
>>>>>>> 3b716f23ad61f0cbf6e9596b896a046a2901fac5
        </div>
      </div>
    </div>
  );
}
