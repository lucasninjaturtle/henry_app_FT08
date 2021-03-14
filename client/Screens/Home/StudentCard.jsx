import React from "react";
import {
  Content,
  CardItem,
  Text,
  Thumbnail,
  Container,
  List,
  ListItem,
} from "native-base";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function StudentCard({ data }) {
  if (!data && Object.keys(data).length === 0) return null;

  console.log(data);

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
    <ScrollView>
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
          <Text style={styles.titles}>
            {instructor && Object.keys(instructor).length > 0
              ? `${instructor.firstName} ${instructor.lastName}`
              : "ninguno"}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.items}>Modulo</Text>
          <Text style={styles.titles}>
            {module ? module : "no tiene asignado ningun modulo"}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.items}>Grupo</Text>
          <Text style={styles.titles}>
            {group
              ? group
              : "no tiene asignado ningun grupo, hable con administracion para un reembolso"}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.items}>Fecha de Inicio</Text>
          <Text style={styles.titles}>
            {startDay
              ? startDay.slice(0, 10)
              : "que hace aqui si no tiene dia de inicio"}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.items}>Numero de Telefono</Text>
          <Text style={styles.titles}>
            {cellphone ? cellphone : "coloque su numero de telefono"}
          </Text>
          {projectManagers && projectManagers.length > 0 ? (
            <>
              <Text style={styles.items}>PM's</Text>
              <List>
                {projectManagers.map((e) => (
                  <ListItem>
                    <Text style={styles.titles}>
                      {e.firstName} {e.lastName}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </>
          ) : (
            <Text>"no tiene pm's asignados"</Text>
          )}
        </View>
        <Container style={styles.card1}>
          <Text></Text>
        </Container>
      </Content>
    </ScrollView>
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
