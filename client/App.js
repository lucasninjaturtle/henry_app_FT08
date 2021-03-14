import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, StyleSheet, LogBox } from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content } from 'native-base';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screens/Login/Login'

// Redux

import { Provider } from 'react-redux'
import store from './Redux/store'

// Navigators

import NavigationMain from './Screens/Navigation/NavigationMain'
import DrawerHomeNavigator from './Navigators_test/DrawerHomeNavigator'

// Disable LogBox (Warnings)

LogBox.ignoreAllLogs(true);


export default function App() {

  const [state, setState] = useState(false)
  return (<Provider store={store}>
    {state ?
      <NavigationContainer>
        <DrawerHomeNavigator/>
      </NavigationContainer>
      : <Login test={setState} />
    }
  </Provider>)

  // switch (state) {
  //   case false: return <Login test={setState}/>
  //   default: return (
  //     <Provider store={store}>
  //     <NavigationContainer>
  //       <DrawerHomeNavigator/>
  //     </NavigationContainer>
  //     </Provider>
  //   )
  // }

  /* return (
      <Provider store={store}>
      <NavigationContainer>
        <NavigationMain/>
      </NavigationContainer>
      </Provider>
  ) */
}