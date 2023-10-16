import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarComponent from '../components/CalendarComponent';
import EventListScreen from '../components/EventListScreen';

const Stack = createNativeStackNavigator();

export const Calendar = () => {
  return (
    <Stack.Navigator initialRouteName="CalendarComponent">
      <Stack.Screen
        name="CalendarComponent"
        component={CalendarComponent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EventListScreen"
        component={EventListScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
