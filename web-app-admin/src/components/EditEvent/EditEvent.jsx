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
        <button>Finalizar edicion</button>
        <div>
          <Calendar/>
        </div>
      </form>
    )
};

export default EditEvent;
