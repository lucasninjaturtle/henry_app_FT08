import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Chat from './Chat'

const Stack = createStackNavigator()

const MyStack = ()=>{


    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Chat'
            component={Chat}
            options={{
                headerShown: false,
            }}
            />
        </Stack.Navigator>
    )
}

export default function ChatNavigator(){
    return <MyStack/>
}

