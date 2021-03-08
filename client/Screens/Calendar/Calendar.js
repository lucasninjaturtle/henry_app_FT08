import React, {useState} from 'react'
import {View, Text, Container, Icon} from 'native-base'
import {Agenda} from 'react-native-calendars';
import { TouchableOpacity, Modal, Pressable} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import {styles, stylesModal} from './CalendarStyles'

const Calendario = ()=>{
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState('')
    const [items, setItems] = useState({
        '2021-03-26': [{name: 'mi cumpleaños', time:'12:00', type:'checkpoint', description:'este es un texto generico que estoy escribiendo para tener como description de un item para probar como se ve el modal'}],
        '2021-03-18': [{name: 'este dia ni idea, pero quiero probar que pasa con los titulos largos', type:'henryTalk'}],
        '2021-03-12': [{name: 'cumpleaños de mi hermano', type:'kickOff'}],
        '2021-03-23': [{name: 'primera cosa del dia'}, {name: 'segunda cosa del dia'},{name:'3 cosa del dia'},{name:'4 cosa del dia'},{name:'5 cosa del dia'},{name:'6 cosa del dia'}]
    })
    const icons = {
        'checkpoint':{icon:'file-code-o', color:'red'},
        'henryTalk':{icon:'comments', color:"#00adf5"}
    }

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
        for (let i = 0; i < 10; i++) {
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
        <Container style={{alignContent:'center', paddingTop:60, backgroundColor:'#FFFDD0'}}>
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
                                <Text style={[stylesModal.modalTextTitle,stylesModal.modalText]}>{selectedItem.name ? selectedItem.name : 'Evento Sin Nombre'}</Text>
                                <Text style={stylesModal.modalText}>Horario: {selectedItem.time ? selectedItem.time : 'Indefinido'}</Text>
                                <Text style={stylesModal.modalText}>Tipo de Evento: {selectedItem.type ? selectedItem.type : 'Indefinido'}</Text>
                                <Text style={stylesModal.modalText}>{selectedItem.description ? selectedItem.description : 'Sin Descripción'}</Text>
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
            //rowHasChanged={(r1, r2)=> r1.name !== r2.name}
            pastScrollRange={12}
            futureScrollRange={12}
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