import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Calendario from './Calendar'

const Stack = createStackNavigator()

const MyStack = ()=>{

    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Calendar'
            component={Calendario}
            options={{
                headerShown: false,
            }}
            />
        </Stack.Navigator>
    )
}

export default function CalendarNavigator(){
    return <MyStack/>
}