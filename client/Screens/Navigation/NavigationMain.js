import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

//Stacks
import HomeNavigator from './HomeNavigator'
//import StatsNavigator from './Stats/StatsNavigator'
import Home from '../Home/Home'
import CalendarNavigator from '../Calendar/CalendarNavigator'

const Tab = createBottomTabNavigator();

const NavigationMain = () =>{

    
    return(
        <Tab.Navigator 
        initialRouteName='Home'
        // tabBarOptions={{
        //     // keyboardHidesTabBar=true,
        //     // showLabel=false,
        //     activeTintColor='yellow'

        // }}
        
        >
            <Tab.Screen
            name='Home'
            component={HomeNavigator}
            options={{
                tabBarIcon:({color}) =>(
                    <Icon
                    name='analytics'
                    style={{position:'relative'}}
                    color={color}
                    size={60}
                    />
                )
            }}
            />
            <Tab.Screen
            name='Calendar'
            component={CalendarNavigator}
            options={{
                tabBarIcon:({color}) =>(
                    <Icon
                    name='calendar-star'
                    color={color}
                    size={60}
                    />
                )
            }}
            />

<Tab.Screen
            name='Stats'
            component={HomeNavigator}
            options={{
                tabBarIcon:({color}) =>(
                    <Icon
                    name='analytics'
                    color={color}
                    size={60}
                    />
                )
            }}
            />

<Tab.Screen
            name='Chat'
            component={HomeNavigator}
            options={{
                tabBarIcon:({color}) =>(
                    <Icon
                    name='comment-dots'
                    color={color}
                    size={60}
                    />
                )
            }}
            />
        </Tab.Navigator>
    )
}

export default NavigationMain;