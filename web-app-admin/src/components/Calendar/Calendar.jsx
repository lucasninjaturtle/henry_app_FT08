import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getEvents } from "../../api";
import  {useQuery} from 'react-query'

export default function Calendar() {
  
  const {data} = useQuery('events', ()=> { 
     return getEvents()
    .then((res) => {
      var aux = res.map((event) => {
        return {
          title: event.name,
          start: event.startDay,
        };
      });
      return aux;
    })
    .catch(err => {
        console.log('Soy err: ', err)
    })
  });

  return (
      <div className='bg-white p-5 ml-3'>
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={data}
    />
    </div>
  );
}
