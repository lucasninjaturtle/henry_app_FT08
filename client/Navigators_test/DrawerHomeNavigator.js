import React from 'react'

//Stacks

import NavigationMain from '../Screens/Navigation/NavigationMain'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contact from '../Screens/Contact/Contact'

const Drawer = createDrawerNavigator();

function DrawerHomeNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={NavigationMain} />
      <Drawer.Screen name="Contact Us" component={Contact} />

    </Drawer.Navigator>
  );
}



export default DrawerHomeNavigator;


