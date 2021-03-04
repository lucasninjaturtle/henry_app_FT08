import React, {useEffect} from 'react'
import 'react-native-gesture-handler';
import {Image, StyleSheet} from 'react-native'
import { Container, Icon, Content, Card, CardItem, Text, Body, Button } from "native-base";
import {useSelector,useDispatch } from 'react-redux'
import { getUserInfo } from '../../Redux/Actions/userActions';
import store from '../../Redux/store';

export default function Home() {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUserInfo())
  }, [])
    const User = useSelector((store) => store.userInfo.usuario)
    return (
        <Container style={styles.container}>
        <Content   padder>
          <Card style={{}}>
            <CardItem header bordered style={styles.card}>
              <Image style={styles.image} source={{uri:'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'}}
              />
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={styles.card}>
                  <Icon name='heart'/>
                </Text>
                <Text >
                    {User.name}
                </Text>
                <Text >
                    GitHub User: {User.githubUser}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered >
              <Text>Datos</Text>
            </CardItem>
            <CardItem  >
              <Text>Instructor: {User.instructor.firstname} {User.instructor.lastname} </Text>
            </CardItem>
            <CardItem  >
              <Text>PM: {User.projectManagers.firstname} {User.projectManagers.lastname} </Text>
            </CardItem>
            <CardItem  >
              <Text>Cohorte actual: {User.cohort}</Text>
              {/* <Button>
              <Icon name='eye'/>
                </Button> */}
            </CardItem>
            <CardItem  >
              <Text>Fecha Ingreso: {User.startDay.slice(0,10)} </Text>
            </CardItem>
            <CardItem  >
                <Text>Modulo Actual: {User.module} </Text>
                {/* <Button>
                    <Icon name='eye'/>
                </Button> */}
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
}

const styles = StyleSheet.create({
  container :{
    alignContent:'center',
    alignItems:'center',
    paddingTop:60,
    backgroundColor:'#FFFDD0'
  },
  card:{
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center'
  },
  image:{
    width:50,
    height:50
  }
})
