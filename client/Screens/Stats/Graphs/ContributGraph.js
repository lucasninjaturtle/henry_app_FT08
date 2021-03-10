import React from 'react'
import 'react-native-gesture-handler';
import {Dimensions, StyleSheet} from 'react-native'
import { Container, Header, Content, Badge, Text, Icon, View, List, ListItem, Left, Body, Right, Thumbnail, Button } from 'native-base';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const width = Dimensions.get("window").width

const ContributGraph = (props)=> {

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
  

    return (
        
        <View
        style={{
          flexDirection: "column",
          height: 150,
          padding: 0,
          top: 10,
        }}
        >
  
  
<ContributionGraph
  values={commitsData}
  endDate={new Date("2017-04-01")}
  numDays={120}
  width={width/1.1}
  height={200}
  squareSize={16}
  chartConfig={{
      alignSelf:'center',
    // backgroundColor: "black",
    backgroundGradientFrom: "#457b9d",
    backgroundGradientTo: "#1d3557",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 3
    },
    propsForDots: {
      r: "4",
      strokeWidth: "1",
      stroke: "#ffa726"
    }
  }}
  style={{
      alignSelf:'center',
    alignItems:'center',
  marginVertical: 1,
  borderRadius: 10,
  alignContent:'center',
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

export default ContributGraph;