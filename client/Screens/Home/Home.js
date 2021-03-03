import React from 'react'
import 'react-native-gesture-handler';
import {Image, StyleSheet} from 'react-native'
import { Container, Icon, Content, Card, CardItem, Text, Body, Button } from "native-base";

export default function Home() {
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
                    {user.name}
                </Text>
                <Text >
                    GitHub Usser: {user.gitUser}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered >
              <Text>Datos</Text>
            </CardItem>
            <CardItem  >
              <Text>Instructor: {user.instructor}</Text>
            </CardItem>
            <CardItem  >
              <Text>PM: {user.pm}</Text>
            </CardItem>
            <CardItem  >
              <Text>Cohorte actual: {user.cohorte}</Text>
              <Button>
              <Icon name='eye'/>
                </Button>
            </CardItem>
            <CardItem  >
              <Text>Fecha Ingreso: {user.joinDate} </Text>
            </CardItem>
            <CardItem  >
                <Text>Modulo Actual: {user.actualModule} </Text>
                <Button>
                    <Icon name='eye'/>
                </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
}

const user = {
  name:'Lautaro Paez',
  gitUser:'lautaro202',
  instructor: 'Leandro Alvarez',
  pm: 'Leandro Alvarez',
  cohorte:'FT08',
  joinDate:'05/07/2020',
  actualModule:'Labs',
  nextCheck:'none'
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
