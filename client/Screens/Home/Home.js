import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { Image, StyleSheet } from "react-native";
import {
  Container,
  Icon,
  Content,
  Card,
  CardItem,
  Text,
  Switch,
  Body,
  Button,
  View,
  Thumbnail,
  List,
  ListItem,
  Left,
  Right
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../Redux/Actions/userActions";
import store from "../../Redux/store";
import { ScrollView } from "react-native-gesture-handler";
import Profile from "../Profile/Profile";

import StudentCard from "./StudentCard";

export default function Home({ navigation }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo(student.github))
    console.log(student)
  }, [])

  let student = useSelector((store) => store.userInfo.usuario);



  return (
    <ScrollView style={{ width: '100%' }}>
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
    fontFamily: "monospace",
    fontStyle: "normal",
    fontSize: 20
  },
  list: {
    paddingTop: -100
  },

}
)
