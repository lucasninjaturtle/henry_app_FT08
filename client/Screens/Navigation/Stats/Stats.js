import React from 'react'
import 'react-native-gesture-handler';
import {Dimensions} from 'react-native'
import { Container, Header, Content, Badge, Text, Icon, View } from 'native-base';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";



const Stats = ()=> {
    return (
        
        <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
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
</View>
        
        
    //     <Container>
    //     <Header />
    //     <Content>
    //       <Badge>
    //         <Text>2</Text>
    //       </Badge>
    //       <Badge primary>
    //         <Text>2</Text>
    //       </Badge>
    //       <Badge success>
    //         <Text>2</Text>
    //       </Badge>
    //       <Badge info>
    //         <Text>2</Text>
    //       </Badge>
    //       <Badge warning>
    //         <Text>2</Text>
    //       </Badge>
          
    //       <Badge danger>
    //         <Text>2</Text>
    //       </Badge>
    //       <Badge primary>
    //       <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
    //       </Badge>
    //       <Badge style={{ backgroundColor: 'black' }}>
    //         <Text style={{ color: 'white' }}>1866</Text>

    //         <Text>2</Text>
    //       </Badge>
    //     </Content>
    //   </Container>
    )
}

export default Stats;