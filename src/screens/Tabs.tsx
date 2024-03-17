import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './Home';
import Settings from './Settings';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" size={30} color="#900" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({color}) => <Icon name="cog" size={30} color="#900" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
