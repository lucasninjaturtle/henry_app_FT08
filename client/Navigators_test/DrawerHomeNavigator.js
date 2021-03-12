import React from 'react'

//Stacks

import Test from './Components/Test'
import DrawerHome from './Components/DrawerHome';
import NavigationMain from '../Screens/Navigation/NavigationMain'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../Screens/Profile/Profile'
import Contact from '../Screens/Contact/Contact'

const Drawer = createDrawerNavigator();

function DrawerHomeNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={NavigationMain} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Contact Us" component={Contact} />

    </Drawer.Navigator>
  );
}



export default DrawerHomeNavigator;


