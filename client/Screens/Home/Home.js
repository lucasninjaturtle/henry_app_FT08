import React, { useEffect } from 'react'
import 'react-native-gesture-handler';
import { Image, StyleSheet } from 'react-native'
import { Container, Icon, Content, Card, CardItem, Text, Switch, Body, Button, View, Thumbnail, List, ListItem, Left, Right } from "native-base";
import { useSelector, useDispatch } from 'react-redux'
import { getUserInfo } from '../../Redux/Actions/userActions';
import store from '../../Redux/store';
import { ScrollView } from 'react-native-gesture-handler';
import Profile from '../Profile/Profile'



export default function Home({ navigation }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserInfo())
  }, [])


  let Student = useSelector((store) => store.userInfo.usuario)
  console.log(Student)

  Object.keys(Student).length === 0 ? Student = {
    name: 'test name',
    cohort: 'tets cohort',
    user: 'GITHUBUSER',
    group: 'grupo test',
    lastname: 'apellido test',
    module: 'modulo test',
    pm: { lucas: 'PM test' },
    startDay: 'start',
    instructor: { firstname: 'primer nombre', lastname: 'apellido' },
  } : Student;

  // name:'',
  // cohort:'',
  // user:'',
  // group:'',
  // lastname:'',
  // module:'',
  // pm:{},
  // startDay:'',
  // instructor:{},

  return (

    <ScrollView>


      <Container style={styles.container}>
        <CardItem header bordered style={styles.card}>
          <Thumbnail style={styles.image} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png' }}
          />
        </CardItem>
        {/* <Content   padder>
          <Card style={{}}>
            
            <CardItem bordered>
              <Body>
                
                <Text style={styles.titles}>
                    {Student.name}
                </Text>
                <Text style={styles.titles}>
                    Github:{"\n"}
                    {Student.email}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered >
              <Text>Datos</Text>
            </CardItem>
            <CardItem  >
              <Text>Instructor:  </Text>
            </CardItem>
            <CardItem  >
              <Text>PM:  </Text>
            </CardItem>
            <CardItem  >
              <Text>Cohorte actual: {Student.cohort}</Text>
              
            </CardItem>
            <CardItem  >
              <Text>Fecha Ingreso: {Student.createdAt.slice(0,10)} </Text>
            </CardItem>
            <CardItem  >
                <Text>Modulo Actual: {Student.module} </Text>
                
            </CardItem>
          </Card>
        </Content> */}
      </Container>
      <Content style={styles.list}>
        <List>

          <ListItem onPress={() => navigation.navigate('Profile')} icon>
            <Left>
              <Button style={{ backgroundColor: "green" }}>
                <Icon active name="person" />
              </Button>
            </Left>
            <Body>
              <Text>Profile</Text>
            </Body>
            <Right>
              <Text>Edit</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={() => navigation.navigate('Settings')} icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="settings" />
              </Button>
            </Left>
            <Body>
              <Text>Settings</Text>
            </Body>
            <Right>
              <Text>Edit</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={() => navigation.navigate('Contact')} icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="paper-plane" />
              </Button>
            </Left>
            <Body>
              <Text>Contact us</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "red" }}>
                <Icon active name="log-out" />
              </Button>
            </Left>
            <Body>
              <Text>Logout</Text>
            </Body>
            <Right>

              <Icon active name="log-out" />
            </Right>
          </ListItem>
        </List>
      </Content>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: 'white',
    height: 550


  },
  card: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  image: {
    width: 80,
    height: 80,
  },
  titles: {
    fontFamily: 'monospace',
    fontStyle: 'normal',
    fontSize: 20,
  },
  list: {
    paddingTop: -100
  }

})
