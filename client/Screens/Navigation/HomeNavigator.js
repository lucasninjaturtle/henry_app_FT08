import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Test from '../../Navigators_test/Components/Test'

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
            name='Test'
            component={Test}
            options={{
                title:'Test',
            }}
            />
        </Stack.Navigator>
        
    )
}

export default function HomeNavigator(){
    return <MyStack/>
}

