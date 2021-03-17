import React, {useEffect, useState} from 'react'
import {View, Text, Container, Icon} from 'native-base'
import {Agenda} from 'react-native-calendars';
import { TouchableOpacity, Modal, Pressable, Linking} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import axios from 'axios'

import {styles, stylesModal} from './CalendarStyles'

const Calendario = ()=>{
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState('')
    const [items, setItems] = useState({})
    const icons = {
        'checkpoint':{icon:'file-code-o', color:'red'},
        'henryTalk':{icon:'comments', color:"#00adf5"}
    }
    useEffect(()=>{
        axios.get('http://192.168.100.13:5000/event/')
        .then(resp=>{
            var aux = {};
            resp.data.forEach(event => {
                aux.hasOwnProperty(event.startDay) 
                ? aux[event.startDay].push({'name': event.name, 'description': event.description, 'url': event.link, time:`${event.startTime} - ${event.endTime}`}) 
                : aux[event.startDay] = [{'name': event.name, 'description': event.description, 'url': event.link, time:`${event.startTime} - ${event.endTime}`}]
            })
            setItems(aux)
        })
        .catch(err=>{console.log(err)})
    },[])

    function renderItem(item) {
        return (
            <TouchableOpacity 
                style={styles.item}
                onPress={()=>{setModalVisible(true); setSelectedItem(item)}} 
            >
                <FontAwesome 
                    name={item.type && icons.hasOwnProperty(item.type) ? icons[item.type].icon : "question-circle"} 
                    size={24}
                    style={{margin:5}}
                    color={item.type && icons.hasOwnProperty(item.type) ? icons[item.type].color : "gray"}
                />
                <Text >{item.name}</Text>
            </TouchableOpacity>
        );
    }

    function renderEmptyDate(){
        return (
            <View style={styles.emptyDate}>
            </View>
        )
    }
    
    function timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }

    function loadItems(day){
        //setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = timeToString(time);
          if (!items[strTime]) {
            items[strTime] = [];
          }
        }
        const newItems = {};
        Object.keys(items).forEach(key => {
          newItems[key] = items[key];
        });
            setItems(newItems);
        //}, 1000);
    }

    return (
        <Container style={{alignContent:'center', paddingTop:60, backgroundColor:'yellow'}}>
            <View>
                <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={stylesModal.centeredView}>
                        <View style={stylesModal.modalView}>
                            {selectedItem ?
                            <>
                                <FontAwesome 
                                        name={selectedItem.type && icons.hasOwnProperty(selectedItem.type) ? icons[selectedItem.type].icon : "question-circle"} 
                                        size={75}
                                        color={selectedItem.type && icons.hasOwnProperty(selectedItem.type) ? icons[selectedItem.type].color : "gray"}
                                />
                                <Text style={[stylesModal.modalTextTitle,stylesModal.modalText]}>{selectedItem.name}</Text>
                                <Text style={stylesModal.modalText}>Horario: {selectedItem.time}</Text>
                                {/* <Text style={stylesModal.modalText}>Tipo de Evento: {selectedItem.type}</Text> */}
                                <Text style={stylesModal.modalText}>{selectedItem.description}</Text>
                                <Text onPress={()=>{Linking.openURL(selectedItem.url)}} style={stylesModal.modalLink}>{selectedItem.url}</Text>
                            </>
                            : <></> }
                            <Pressable
                                style={stylesModal.button}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={stylesModal.textStyle}>OK</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
            <Agenda
            items={items ? items : {}}

            loadItemsForMonth={loadItems}

            renderEmptyDate={renderEmptyDate}            
            //renderDay={renderDays}
            renderItem={renderItem}
            rowHasChanged={(r1, r2)=> r1.name !== r2.name}
            pastScrollRange={1}
            futureScrollRange={1}
            />
        </Container>
    )
}

// function numToDay(num){
//     var dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
//     return dias[num]
// }
//
// function renderDays(day, item){
//     var date = day ? new Date(day.timestamp) : ''
//     return day ? (
//         <View style={[styles.day, {backgroundColor: item ? 'white' : '' }]}>
//             <Text 
//                 style={[styles.textDay, {color: item ? 'black': '#cfcfcf'}]}
//             >
//                 {day.day < 10 ? '0' + day.day : day.day}
//             </Text>
//             <Text style={[styles.textNum, {color: item ? 'black': '#cfcfcf'}]}>{numToDay(date.getDay())}</Text>
//         </View>
//     ) : (<></>)
// }

export default Calendario;