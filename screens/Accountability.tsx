import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserProfile from '../components/UserProfile';
import Colors from '../constants/Colors';
import Top from '../components/Top';
import Middle from '../components/Middle';
import Bottom from '../components/Bottom';
import Profile from './Profile';

const Accountability = () => {
  return (
    <View style={styles.container}>
        <Profile/>
      {/* Add your content for the Accountability screen here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Add additional styles as needed
});

export default Accountability;
