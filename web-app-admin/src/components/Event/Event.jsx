import React, { useEffect, useState }from 'react';
import { createEvent } from '../../api';
import './Event.css';

/*
Nombre del evento
Fecha del evento
Link del evento (Opcional)
Breve descripcion del evento
Tipo de evento (Este cambio va a hacer una etiqueta tipo select) 
    Para este cambio vas a tener que hacer un get a EventTypes,
    que es otro modelo que contiene el nombre de todos los tipos de eventos

Crear un evento: localhost:5000/event (POST)
Buscar x tipo de evento: localhost:5000/event/:id (GET)
Buscar todos los eventos: localhost:5000/event (GET)
Editar un evento x id: localhost:5000/event/:id (PUT)
Eliminar un evento x id: localhost:5000/event/:id (DELETE)

Y las de tipo de evento tambien:
Crear un evento: localhost:5000/type/event (POST)
Buscar x tipo de evento: localhost:5000/event/type/:id (GET)
Buscar todos los eventos: localhost:5000/type/event (GET)
Editar un evento x id: localhost:5000/event/type/:id (PUT)
Eliminar un evento x id: localhost:5000/event/type/:id (DELETE)
*/

function Event(props) {

    const [data, setData] = useState({
      startDay: "",
      name: "",
      link: "",
      description: "",
      eventType: "",
    });

    function submit(e) {
        e.preventDefault();
        createEvent(data).then(res => {
            props.history.replace("/manager")
          }).catch(err => {
            props.history.replace("/manager")
      
          })
    }
    
    
    function cambios(e) {
        setData({...data, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <form onSubmit={ submit }>
            <h1><b>Crear nuevo evento</b></h1>
            <input name="startDay" type="date" onChange={cambios} placeholder="Fecha del evento" />
            <input name="name" type="text" onChange={cambios} placeholder="Nombre del evento" />
            <input name="link" type="url" onChange={cambios} placeholder="Link del evento" />
            <input name="description" type="text" onChange={cambios} placeholder="Descripcion del evento" />
            <input name="eventType" type="text" onChange={cambios} placeholder="Tipo de evento" />
            <button type="submit">Crear evento</button>
            </form>
        </div>
    )
}

export default Event