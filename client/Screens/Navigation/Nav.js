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
        <Footer>
                <FooterTab>
                    <Button active>
                        <Icon active name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button>
                        <Icon name="calendar" />
                        <Text>Calendar</Text>
                    </Button>
                    <Button>
                        <Icon name="stats-chart-sharp" />
                        <Text>Stats</Text>
                    </Button>
                    <Button>
                        <Icon name="hardware-chip" />
                        <Text>Challenge</Text>
                    </Button>
                    <Button>
                        <Icon name="chatbox" />
                        <Text>Chat</Text>
                    </Button>
            </FooterTab>
             </Footer>
        </Container>
    )
}
