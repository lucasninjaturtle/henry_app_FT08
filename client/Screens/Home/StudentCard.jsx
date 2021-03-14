import React from "react";
import { Content, CardItem, Text, Thumbnail, Container } from "native-base";
import { StyleSheet, View } from "react-native";

export default function StudentCard({ data }) {
  if (!data && Object.keys(data).length === 0) return null;

  // console.log(data)

  const {
    cellphone,
    cohort,
    email,
    github,
    group,
    id,
    instructor,
    lastName,
    module,
    name,
    projectManagers,
    startDay,
  } = data;

  return (
    <Content
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      padder
    >
      <CardItem header style={styles.card}>
        <Thumbnail
          style={styles.image}
          source={{
            uri:
              "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png",
          }}
        />
      </CardItem>
      <Text style={styles.subtitles}>
        {name} {lastName}
      </Text>
      <Text style={styles.titles}>{github}</Text>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={styles.items}>Instructor</Text>
        <Text style={styles.titles}>Leandro Alvarez</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={styles.items}>Modulo</Text>
        <Text style={styles.titles}>Modulo 3</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={styles.items}>Grupo</Text>
        <Text style={styles.titles}>FT-04</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={styles.items}>Fecha de Inicio</Text>
        <Text style={styles.titles}>25/11/2020</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={styles.items}>Numero de Telefono</Text>
        <Text style={styles.titles}>+541173693527</Text>
      </View>
      <Container style={styles.card1}>
        <Text></Text>
      </Container>
    </Content>
  );
}

const styles = StyleSheet.create({
  titles: {
    textAlign: "center",
  },
  subtitles: {
    fontWeight: "100",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "monospace",
  },
  card: {
    backgroundColor: "transparent",
    borderRadius: 9999,
  },
  items: {
    textAlign: "center",
    fontFamily: "monospace",
    fontWeight: "bold",
    lineHeight: 20,
    marginTop: 20,
    textDecorationLine: "underline",
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    borderWidth: 3,
  },
  card1: {
    backgroundColor: "yellow",
    // position: "absolute",
    top: "-84.9%",
    left: "-80%",
    borderRadius: 9999,
    // transform: [{ translateX: -50 }, { translateY: -75 }],
    width: 1000,
    height: 1000,
    zIndex: -1,
  },
});
