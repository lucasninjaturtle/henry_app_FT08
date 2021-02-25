import React from 'react'
import 'react-native-gesture-handler';
import {Image} from 'react-native'
import { Container, Header, Content, Badge, Text, Icon } from 'native-base';

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

const Stats = ()=> {
    return (
        <Container>
        <Header />
        <Content>
          <Badge>
            <Text>2</Text>
          </Badge>
          <Badge primary>
            <Text>2</Text>
          </Badge>
          <Badge success>
            <Text>2</Text>
          </Badge>
          <Badge info>
            <Text>2</Text>
          </Badge>
          <Badge warning>
            <Text>2</Text>
          </Badge>
          
          <Badge danger>
            <Text>2</Text>
          </Badge>
          <Badge primary>
          <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
          </Badge>
          <Badge style={{ backgroundColor: 'black' }}>
            <Text style={{ color: 'white' }}>1866</Text>
          </Badge>
        </Content>
      </Container>
    )
}

export default Stats;