import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, StyleSheet } from "react-native";
import axios from "axios";
import Nav from './Screens/Navigation/Nav'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content } from 'native-base';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screens/Login/Login'

// Navigators

import  NavigationMain from './Screens/Navigation/NavigationMain'



export default function App() {

  const [state, setState] = useState(false)

  switch (state) {
    case false: return <Login test={setState}/>
    default: return (
    <NavigationContainer>
      <NavigationMain/>
    </NavigationContainer>
  )
  }
}