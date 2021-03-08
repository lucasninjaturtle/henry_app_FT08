import React, {useState} from 'react'
import {View, Text, Container, Content, CardItem} from 'native-base'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Calendario = ()=>{
    const [selectedDate, setSelectedDate] = useState('')
    return (
        <Container style={{alignContent:'center', paddingTop:60, backgroundColor:'#FFFDD0'}}>
            <Agenda
            items={items ? items : {}}

            loadItemsForMonth={loadItems}

            renderEmptyDate={renderEmptyDate}            
            //renderDay={renderDays}
            renderItem={renderItem}
            //rowHasChanged={(r1, r2)=> r1.name !== r2.name}
            pastScrollRange={12}
            futureScrollRange={12}
            />
        </Container>
    )
}

export default Calendario;