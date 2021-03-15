import React, { useEffect, useState }from 'react';
import { allEvent, editEvent } from '../../api';
import Calendar from '../Calendar/Calendar';
import "./EditEvent.css";

function EditEvent(props) {

    function submit(e){
        
        editEvent().then(res => {
            props.history.replace("/manager")
          }).catch(err => {
            props.history.replace("/manager")
      
          })
    };

    return (
      <form>
        <h1><b>Editar evento</b></h1>
            <input name="startDay" type="date" placeholder="Fecha del evento" />
            <input name="name" type="text" placeholder="Nombre del evento" />
            <input name="link" type="url" placeholder="Link del evento" />
            <input name="description" type="text" placeholder="Descripcion del evento" />
            <input name="eventType" type="text" placeholder="Tipo de evento" />
        <button>Finalizar edicion</button>
        <div>
          <Calendar/>
        </div>
      </form>
    )
};

export default EditEvent;
