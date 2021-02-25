import React from 'react'
import 'react-native-gesture-handler';
import {Image} from 'react-native'
import { Container, Icon, Content, Card, CardItem, Text, Body, Button } from "native-base";

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

export default function Stats() {
    return (
        <Container style={{alignContent:'center', alignItems:'center', paddingTop:60, backgroundColor:'#FFFDD0'}}>
        <Content   padder>
          <Card style={{}}>
            <CardItem header bordered style={{alignItems:'center', alignContent:'center', alignSelf:'center'}}>
              <Image style={{width:50,height:50}} source={{uri:'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'}}
              />
            </CardItem>
            
    
          </Card>
        </Content>
      </Container>
    )
}
