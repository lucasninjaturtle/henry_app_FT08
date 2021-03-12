import React from 'react'

//Stacks

import Test from './Components/Test'
import DrawerHome from './Components/DrawerHome';

import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();

function DrawerHomeNavigator() {
  return (
    <Drawer.Navigator>
     
      {/* <Drawer.Screen name="Profile" component={Profile} /> */}
      <Drawer.Screen name="Test" component={Test} />
    </Drawer.Navigator>
  );
}



export default DrawerHomeNavigator;


