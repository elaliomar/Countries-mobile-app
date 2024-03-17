import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Tabs from '../screens/Tabs';

const MainNavigator = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Tab'>
        <Stack.Screen name="Tab" component={Tabs}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
    </Stack.Navigator>
  )
}

export default MainNavigator