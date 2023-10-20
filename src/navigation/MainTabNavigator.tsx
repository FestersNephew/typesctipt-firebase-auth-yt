import React, { useState, useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Accountability from '../Accountability/Accountability';
import { Calendar } from '../screens/Calendar';
import Resources from '../screens/Resources';
import Settings from '../screens/SettingsScreen';
import Colors from '../constants/Colors';
import { auth } from '../../firebase/firebase';
import { User } from 'firebase/auth';
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/routers';

const Tab = createMaterialBottomTabNavigator();

type MainTabNavigatorProps = {
  route: RouteProp<ParamListBase, 'Accountability'>;
};

const MainTabNavigator = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Accountability"
      activeColor={Colors.primary}
      inactiveColor={Colors.dark}
      barStyle={{ backgroundColor: Colors.secondary }}
    >
      <Tab.Screen
  name="Accountability"
  options={{
    tabBarLabel: 'Accountability',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="account-group" color={color} size={26} />
    ),
  }}
>
  {() => <Accountability user={user} />}
</Tab.Screen>

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
