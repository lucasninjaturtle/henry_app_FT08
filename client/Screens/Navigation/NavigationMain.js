import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Icon from 'react-native-vector-icons/FontAwesome'
import { Ionicons } from '@expo/vector-icons'


//Stacks
import HomeNavigator from './HomeNavigator'
import CalendarNavigator from '../Calendar/CalendarNavigator'
import StatsNavigator from '../Stats/StatsNavigator'
import ChatNavigator from '../Chat/ChatNavigator'


const Tab = createBottomTabNavigator();

const NavigationMain = () => {

    return (

        <Tab.Navigator
            initialRouteName='Login'
            tabBarOptions={{
                activeTintColor: 'grey',
                inactiveTintColor: 'black',
                style: {
                    backgroundColor: 'yellow',

                },
            }}

        >
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name='home'
                            style={{ position: 'relative' }}
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Calendar'
                component={CalendarNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name='calendar'
                            color={color}
                            size={30}
                        />
                    )
                }}
            />

            <Tab.Screen
                name='Stats'
                component={StatsNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name='analytics'
                            color={color}
                            size={30}
                        />
                    )
                }}
            />

            <Tab.Screen
                name='Chat'
                component={ChatNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name='md-chatbubbles'
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default NavigationMain;