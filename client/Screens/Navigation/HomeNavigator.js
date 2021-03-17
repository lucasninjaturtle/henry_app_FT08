import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Test from '../../Navigators_test/Components/Test'
import Settings from '../Settings/Settings'
import Contact from '../Contact/Contact'
import Cohort from  '../Cohort/Cohort'

const Stack = createStackNavigator()

const MyStack = ()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Home'
            component={Home}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
            name='Profile'
            component={Profile}
            options={{
                title:'Profile',
            }}
            />
            <Stack.Screen
            name='Settings'
            component={Settings}
            options={{
                title:'Settings',
            }}
            />
            <Stack.Screen
            name='Contact'
            component={Contact}
            options={{
                title:'Contact us',
            }}
            />
        </Stack.Navigator>
        
    )
}

export default function HomeNavigator(){
    return <MyStack/>
}

