import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import CalendarComponent from '../components/Calendar';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <CalendarComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.green, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Add additional styles as needed
});

export default Calendar;
