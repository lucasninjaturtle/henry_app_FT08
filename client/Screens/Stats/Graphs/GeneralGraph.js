import React, {useState} from 'react'
import 'react-native-gesture-handler';
import {Dimensions, Modal, StyleSheet} from 'react-native'
import { Container, Header, Content, Badge, Text, Icon, View, List, ListItem, Left, Body, Right, Thumbnail, Button } from 'native-base';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

const width = Dimensions.get("window").width

const GeneralGraph = (props)=> {

  const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 }
  ];


  const [modalVisible, setModalVisible] = useState(false)

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
                <Text>Johndoegithubprofile</Text>
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
      labels: ["M1", "M2", "M3", "M4", "Project", "Labs"],
      datasets: [
        {
          data: [
            Math.random(4) * 100,
            Math.random(2) * 1000,
            Math.random(1) * 10000,
            Math.random(0.5) * 1000,
            Math.random(5) * 100,
            Math.random(2) * 1000
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width/1.1} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="L"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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