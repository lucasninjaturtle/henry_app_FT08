import React from 'react';
import {  Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import 'react-native-gesture-handler';

export default function Nav() {
    return (
            <Header style={{backgroundColor:'#CEBB1B'}}>
                <Left>
                    <Button transparent>
                    <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Henry Logo</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='moon' />
                    </Button>
                </Right>
            </Header>
    )
}
