import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { Container } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

import StudentCard from "./StudentCard";

export default function Home({ navigation }) {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container style={styles.container}>
        <StudentCard />
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    paddingTop: 10,
    height: 550,
    width: "100%"
  },
  card: {
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center"
  },

  titles: {
    fontFamily: "monospace",
    fontStyle: "normal",
    fontSize: 20
  },
  list: {
    paddingTop: -100
  }
});
