import React, { useState } from 'react'
import 'react-native-gesture-handler';
import { Dimensions, Modal, StyleSheet } from 'react-native'
import { Container, Header, Content, Badge, Text, Icon, View, List, ListItem, Left, Body, Right, Thumbnail, Button } from 'native-base';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

import store from '../../Redux/store';
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../Redux/Actions/userActions";
import axios from 'axios';





import GeneralGraph from './Graphs/GeneralGraph';
import ContributGraph from './Graphs/ContributGraph';
import CakeGraph from './Graphs/CakeGraph'


const width = Dimensions.get("window").width

const Stats = (props) => {
  let student = useSelector((store) => store.userInfo.usuario);
  console.log('Estoy desde Stats.js :', student)
  // const github = student.github;
  // const githubToken = student.githubToken;
  // if(githubToken)
  // if (student.githubToken) {

  // }

  React.useEffect(() => {
    const github = student.github;
    const githubToken = student.githubToken;

    if (github) {
      axios.post('http://192.168.0.145:5000/github/getrepos', {
        token: githubToken
      }).then(resp => {
        console.log('respondio', resp.data)
      }).catch(err => {
        console.log(err)
      })
    }
  });

  return (

    <View
      style={{
        flexDirection: "column",
        height: 150,
        padding: 0,
        top: 40,
      }}
    >
      <Text>Hola Mundo</Text>
      <GeneralGraph />
      <ContributGraph />
    </View>

  )

  // const commitsData = [
  //   { date: "2017-01-02", count: 1 },
  //   { date: "2017-01-03", count: 2 },
  //   { date: "2017-01-04", count: 3 },
  //   { date: "2017-01-05", count: 4 },
  //   { date: "2017-01-06", count: 5 },
  //   { date: "2017-01-30", count: 2 },
  //   { date: "2017-01-31", count: 3 },
  //   { date: "2017-03-01", count: 2 },
  //   { date: "2017-04-02", count: 4 },
  //   { date: "2017-03-05", count: 2 },
  //   { date: "2017-02-30", count: 4 }
  // ];
  // const [modalVisible, setModalVisible] = useState(false)




  /* <View>

<Text>PRACTICE </Text>

<Button onPress={()=>props.navigation.navigate('DrawerHome')}>
<Text>PRESS ME AND I USE NAGIVATION</Text>
</Button>

<Button warning onLongPress={()=>setModalVisible(true)}  onPress={()=>console.log('MODAL')}>
<Text>PRESS ME AND I USE MODAL</Text>
</Button>

<View>
<Modal
  animationType='slide'
  transparent={true}
  visible={modalVisible}
  onRequestClose={()=>{
    setModalVisible(false)
  }}
>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <TouchableOpacity
      underlayColor='#E8E8E8'
      onPress={()=>{
        setModalVisible(false)
      }}
      style={{
        alignSelf:'flex-end',
        position:'absolute',
        top: 5,
        right: 10,
      }}
      >

        
      
      </TouchableOpacity>
      <Button onPress={()=>{
        setModalVisible(false)
      }}>
      <Ionicons name='close' size={20}/>
      </Button>
      
      <Button>
        <Text> TEST </Text>
      </Button>
      <Button>
        <Text> TEST </Text>
      </Button>
      <Button>
        <Text> TEST </Text>
      </Button>
    </View>
  </View>

</Modal>
</View>

</View> */
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    alignItems: 'center',
  },
  innerText: {
    color: 'red',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  }
});

export default Stats;