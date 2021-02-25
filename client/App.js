import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, StyleSheet } from "react-native";
import Nav from './Screens/Navigation/Nav'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content } from 'native-base';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

// Navigators

import  NavigationMain from './Screens/Navigation/NavigationMain'



export default function App() {
  return (
  <NavigationContainer>


    <NavigationMain/>
  </NavigationContainer>
  );
}

