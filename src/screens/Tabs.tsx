import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './Home';
import Settings from './Settings';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
  return (
    <>
        <Tab.Navigator initialRouteName='Home' style={{backgroundColor:'black'}}>
    <Tab.Screen    options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={30} color="#900" />
          ),
        }} name="Home" component={Home} />
    <Tab.Screen 
    options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => (
          <Icon name="cog" size={30} color="#900" />
        ),
      }} name="Settings" component={Settings} />
  </Tab.Navigator>
    
    </>

  )
}