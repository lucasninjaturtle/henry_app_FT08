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

const CakeGraph = (props)=> {



    let chartConfig = {
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
      }

    const data = [
        {
          name: "M1",
          population: 56,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "M2",
          population: 20,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "M3",
          population: 50,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "M4",
          population: 50,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Labs",
          population: 100,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
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
  
  
  <PieChart
  data={data}
  width={width/2}
  height={100}
  chartConfig={chartConfig}
  accessor={"population"}
  backgroundColor={"transparent"}
  paddingLeft={"15"}
  center={[10, 50]}
  absolute
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

export default CakeGraph;