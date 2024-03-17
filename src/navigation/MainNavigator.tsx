import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../screens/Details';
import Tabs from '../screens/Tabs';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={Tabs} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
