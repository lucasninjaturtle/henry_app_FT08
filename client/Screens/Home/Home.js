import React from 'react'
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native'
import { Container} from "native-base";
import { useSelector } from 'react-redux'
import store from '../../Redux/store';
import { ScrollView } from 'react-native-gesture-handler';

import StudentCard from "./StudentCard"



export default function Home() {
  let student = useSelector((store) => store.userInfo.usuario)
  return (
    <ScrollView style ={{width:'100%'}}>
      <Container style={styles.container}>
        <StudentCard data={student} />
      </Container>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    height: 550,
    width: '100%'
  },
  card: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },

  titles: {
    fontFamily: 'monospace',
    fontStyle: 'normal',
    fontSize: 20,
  },
  list: {
    paddingTop: -100
  },

 }
)
