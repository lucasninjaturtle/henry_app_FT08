import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getEvents } from "../../api";

export default function Calendar() {
  const [calendar, setCalendar] = useState([]);
  useEffect(() => {
    getEvents()
    .then((res) => {
        console.log('Esto es: ', res)
      var aux = res.map((event) => {
        return {
          title: event.name,
          start: event.startDay,
        };
      });
      console.log('Arranca? ', aux)
        setCalendar(aux)
      
    })
    .catch(err => {
        console.log('Soy err: ', err)
    })
  }, []);
    if(!calendar) return null;

  return (
      <div className='bg-white p-5 ml-3'>
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={calendar}
    />
    </div>
  );
}
