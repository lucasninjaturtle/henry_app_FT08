import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Stats from './Stats'

const Stack = createStackNavigator()

const MyStack = ()=>{


    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Stats'
            component={Stats}
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

