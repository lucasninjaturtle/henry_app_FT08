import React, { useEffect, useState }from 'react';
import { deleteEvent } from '../../api';
import "./DeleteEvent.css";

function DeleteEvent(props) {

    function submit(e){
        e.preventDefault();
        deleteEvent.then(res => {
            props.history.replace("/manager")
          }).catch(err => {
            props.history.replace("/manager")
      
          })
    };

    return(
      <form>
        <button>Eliminar evento</button>
      </form>
    )
};

export default DeleteEvent;