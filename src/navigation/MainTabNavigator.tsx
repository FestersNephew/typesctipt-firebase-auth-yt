import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Accountability from '../Accountability/Accountability';
import { Calendar } from '../screens/Calendar';
import Resources from '../screens/Resources';
import Settings from '../screens/SettingsScreen';
import Colors from '../constants/Colors';


const Tab = createMaterialBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Accountability"
      activeColor={Colors.primary}
      inactiveColor={Colors.dark}
      barStyle={{ backgroundColor: Colors.secondary }}
    >
      <Tab.Screen
        name="Accountability"
        component={Accountability}
        options={{
          tabBarLabel: 'Accountability',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Resources"
        component={Resources}
        options={{
          tabBarLabel: 'Resources',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="boombox" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    
  );
}

export default MainTabNavigator;
