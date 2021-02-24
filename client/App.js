import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, StyleSheet } from "react-native";
import Nav from './Screens/Navigation/Nav'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home/Home'
import Footer from './Screens/Navigation/Footer'


export default function App() {
  return (
    <NavigationContainer>
      <Nav />
      <Home/>
      <Footer/>
    </NavigationContainer>
  );
}

