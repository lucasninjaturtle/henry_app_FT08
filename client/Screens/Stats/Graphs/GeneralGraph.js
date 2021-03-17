import React, {useState} from 'react'
import { useSelector } from "react-redux";
import 'react-native-gesture-handler';
import {Dimensions, Modal, StyleSheet} from 'react-native'
import { Container, Header, Content, Badge, Text, Icon, View, List, ListItem, Left, Body, Right, Thumbnail, Button } from 'native-base';
import { LineChart } from "react-native-chart-kit";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

const width = Dimensions.get("window").width

const GeneralGraph = (props)=> {
  let student = useSelector((store) => store.userInfo.usuario);
  const commitsData = [
            props.commits['Curso.Prep.Henry'],
            props.commits['FT-M1'],
            props.commits['FT-M2'],
            props.commits['FT-M3'],
            props.commits['FT-M4'],
            props.commits['ecommerce'],
          ]


  // const [modalVisible, setModalVisible] = useState(false)

  return (
        
    <View
      style={{
        flexDirection: "column",  
        padding: 0,  
      }}
    >
      <View>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{uri:'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'}} />
            </Left>
            <Body>
              <Text>{student.name} {student.lastName}</Text>
              <Text note>Github stats messured in Lines of code</Text>
            </Body>
            <Right>
              <Text note></Text>
            </Right>
          </ListItem>
        </List>
      </View>
  {/* <Text
  style={styles.baseText}
  >Your GIT Stats messured in Lines of code</Text> */}
    <LineChart
    data={{
      labels: ["Prep", "M1", "M2", "M3", "M4", "Project"],
      datasets: [
        {data: commitsData}
      ]
    }}
    width={Dimensions.get("window").width/1.1} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
        alignItems:'center',
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
)
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    alignItems:'center',
  },
  innerText: {
    color: 'red',
  },
  modalView:{
    margin:20,
    backgroundColor:'white',
    borderRadius:20,
    padding:35,
    alignItems:'center',
    elevation: 5
  },
  centeredView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:22,
  }
});

export default GeneralGraph;