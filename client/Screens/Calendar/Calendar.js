import React, {useState} from 'react'
import {View, Text, Container, Content, CardItem} from 'native-base'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Calendario = ()=>{
    const [selectedDate, setSelectedDate] = useState('')
    return (
        <Container style={{alignContent:'center', alignItems:'center', paddingTop:60, backgroundColor:'#FFFDD0'}}>
            <Content>
                <CardItem bordered>
                    <View>
                        <Text>Este es el calendario</Text>
                    </View>
                </CardItem>
                <CardItem bordered>
                    <Calendar 
                        onDayPress={(day) => {setSelectedDate(day.dateString)}}
                        theme={{
                            selectedDayBackgroundColor: '#00adf5',
                        }}
                        markedDates={{
                            [selectedDate]: {selected: true, selectedColor: '#00adf5'},
                        }}
                    />
                </CardItem>
                <CardItem>
                    <Text>{selectedDate}</Text>
                </CardItem>
            </Content>
        </Container>
    )
}

export default Calendario;