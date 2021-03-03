import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Home'

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

export default function StatsNavigator(){
    return <MyStack/>
}

