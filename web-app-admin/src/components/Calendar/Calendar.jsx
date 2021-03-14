import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import { allEvent } from '../../api';

export default function Calendar () {
    function eventos(e){
        e.preventDefault();
        allEvent().then(res => {console.log(res)
        }) .catch(err => {console.log(err)});
    };
    return(
        <FullCalendar 
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        eventContent={allEvent}
        />
    )
}