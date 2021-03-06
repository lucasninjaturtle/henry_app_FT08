import React, {Component} from 'react'
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

const Stats = (props)=> {

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
          top: 40,
        }}
        >
  <View>
  <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' }} />
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
    width={Dimensions.get("window").width} // from react-native
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
      marginVertical: 8,
      borderRadius: 16
    }}
  />


<ContributionGraph
  values={commitsData}
  endDate={new Date("2017-04-01")}
  numDays={105}
  width={width}
  height={220}
  chartConfig={{
    // backgroundColor: "black",
    backgroundGradientFrom: "#457b9d",
    backgroundGradientTo: "#1d3557",
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
/>

<View>

<Text>PRACTICE </Text>

    <Button onPress={()=>props.navigation.navigate('DrawerHome')}>
      <Text>PRESS ME AND I USE NAGIVATION</Text>
    </Button>

    <Button warning onPress={()=>console.log('MODAL')}>
      <Text>PRESS ME AND I USE MODAL</Text>
    </Button>

</View>
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
});

export default Stats;