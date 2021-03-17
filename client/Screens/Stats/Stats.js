import React, { useState } from "react";
import "react-native-gesture-handler";
import { Dimensions, StyleSheet } from "react-native";
import { View } from "native-base";
import { useSelector } from "react-redux";
import axios from "axios";
import { envTrucho } from "../../envTrucho";
import GeneralGraph from "./Graphs/GeneralGraph";
import ContributGraph from "./Graphs/ContributGraph";

function countCommits(commits, name) {
  let auxiliar = {};
  var date;
  for (let i = 0; i < commits.length; i++) {
    date = commits[i].date.slice(0, 10);
    if (commits[i].author !== "unknown") {
      if (!auxiliar[date]) {
        auxiliar[date] = 1;
      } else {
        auxiliar[date] += 1;
      }
    }
  }
  //var formatoFinal = []
  var formatoFinal = 0;
  //Object.entries(auxiliar).forEach(x=>{formatoFinal.push({date:x[0], count:x[1]})})
  Object.entries(auxiliar).forEach((x) => {
    formatoFinal += x[1];
  });
  return formatoFinal;
}

const width = Dimensions.get("window").width;

const Stats = (props) => {
  const [commits, setCommits] = useState({
    ecommerce: 0,
    "Curso.Prep.Henry": 0,
    "FT-M1": 0,
    "FT-M2": 0,
    "FT-M3": 0,
    "FT-M4": 0
  });

  let student = useSelector((store) => store.userInfo.usuario);
  React.useEffect(() => {
    const github = student.github;
    const githubToken = student.githubToken;

    if (github) {
      axios
        .post(`http://${envTrucho.EXPO_HTTP_IP}:5000/github/getrepos`, {
          token: githubToken
        })
        .then((resp) => {
          resp.data.forEach((x) => {
            var aux = commits;
            if (x.name.slice(0, 9) === "ecommerce") {
              aux["ecommerce"] = countCommits(x.data);
            } else {
              aux[x.name] = countCommits(x.data);
            }
            setCommits(aux);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <View
      style={{
        flexDirection: "column",
        height: 150,
        padding: 0,
        top: 40
      }}
    >
      <GeneralGraph commits={commits ? commits : ""} />
      <ContributGraph />
    </View>
  );

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

</View> */
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: "bold",
    alignItems: "center"
  },
  innerText: {
    color: "red"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  }
});

export default Stats;
