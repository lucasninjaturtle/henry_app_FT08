import React, { useState, useEffect } from "react";
import {
  Content,
  CardItem,
  Text,
  Thumbnail,
  Container,
  List,
  ListItem,
} from "native-base";
import { getUserCohort } from "../../Redux/Actions/userActions";
import { Pressable, StyleSheet, View, Modal, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

export default function StudentCard() {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const userData = useSelector((state) => state.userInfo.usuario);

  let { usuario } = useSelector((store) => store.userInfo);
  let { cohort: cohortData } = useSelector((store) => store.userInfo);

  useEffect(() => {
    if (usuario.cohort) dispatch(getUserCohort(usuario.cohort.id));
  }, []);
  if (Object.keys(userData).length === 0) return null;

  let students = cohortData.students;

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
  } = userData;

  return (
    <ScrollView>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        padder
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Usuarios del cohorte </Text>
              <Container>
                <ScrollView>
                  {!students ? <Text>loading...</Text> : null}
                  {students &&
                    students.map((student) => {
                      return (
                        <Text>
                          {student.name} {student.lastName}
                        </Text>
                      );
                    })}
                </ScrollView>
              </Container>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
            {instructor
              ? `${instructor.firstName} ${instructor.lastName}`
              : "ninguno"}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.items}>Modulo</Text>
          <Text style={styles.titles}>
            {module ? module.name : "no tiene asignado ningun modulo"}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.items}>Grupo</Text>
          <Text style={styles.titles}>
            {group ? group.name : "no tiene asignado ningun grupo"}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Pressable onPress={() => setModalVisible(true)}>
            <Text style={styles.cohort}>Cohort:</Text>
            <Text style={styles.titles}>
              {cohort ? cohort.name : "no tiene asignado ningun cohorte"}
            </Text>
          </Pressable>
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
  cohort: {
    color: "blue",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
