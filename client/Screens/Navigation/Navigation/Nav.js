import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, StyleSheet } from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content } from 'native-base';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default function Nav() {
    return (
        <Container>
            <Header>
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
        <Content />
        
        </Container>
    )
}
