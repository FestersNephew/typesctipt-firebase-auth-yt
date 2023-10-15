import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accountability from '../screens/Accountability';
import Calendar from '../screens/Calendar';
import Resources from '../screens/Resources';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarStyle: {
        backgroundColor: '#FF5722',
    
        paddingBottom: 10,
    },
}

const MainTabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={{ tabBarShowLabel: false, ...screenOptions}} 
    initialRouteName="Accountability"

    >
      <Tab.Screen name="Accountability" component={Accountability} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Resources" component={Resources} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
