import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Dummy from './Dummy'
import Home from '../Home/Home'

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
        </Stack.Navigator>
    )
}

export default function HomeNavigator(){
    return <MyStack/>
}

