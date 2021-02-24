import React from 'react'
import 'react-native-gesture-handler';
import {Image} from 'react-native'
import { Container, Icon, Content, Card, CardItem, Text, Body, Button } from "native-base";

export default function Home() {
    return (
        <Container>
        <Content padder>
          <Card>
            <CardItem header bordered style={{alignItems:'center', alignContent:'center', alignSelf:'center'}}>
              <Image style={{width:50,height:50}} source={{uri:'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'}}
              />
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{alignContent:'center', alignItems:'center', alignSelf:'center'}}>
                  <Icon name='heart'/>
                </Text>
                <Text style={{alignContent:'center', alignItems:'center', alignSelf:'center', paddingTop:15}}>
                    Nombre y Apellido
                </Text>
                <Text style={{alignContent:'center', alignItems:'center', alignSelf:'center', paddingTop:15}}>
                    GitHub User: xxxxxxx
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered style={{alignContent:'center', alignItems:'center', alignSelf:'center', paddingTop:15}}>
              <Text>Datos</Text>
            </CardItem>
            <CardItem style={{alignContent:'center', alignItems:'center', alignSelf:'center', paddingTop:15}} >
              <Text>Instructor: xxxxxxxx</Text>
            </CardItem>
            <CardItem style={{alignContent:'center', alignItems:'center', alignSelf:'center', paddingTop:15}} >
              <Text>PM: xxxxxxxx</Text>
            </CardItem>
            <CardItem style={{alignContent:'center', alignItems:'center', alignSelf:'center', paddingTop:15}} >
              <Text>Cohorte actual: FTXX</Text>
              <Button>
              <Icon name='eye'/>
                </Button>
            </CardItem>
            <CardItem style={{alignContent:'center', alignItems:'center', alignSelf:'center', paddingTop:15}} >
              <Text>Fecha Ingreso: xx/xx/xxxx</Text>
            </CardItem>
            <CardItem style={{alignContent:'center', alignItems:'center', alignSelf:'center', paddingTop:15}} >
                <Text>Modulo Actual: XX </Text>
                <Button>
                    <Icon name='eye'/>
                </Button>
            </CardItem>
            <CardItem style={{alignContent:'center', alignItems:'center', alignSelf:'center', paddingTop:15}} >
              <Text>Proximo Checkpoint: XXXXX </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
}
