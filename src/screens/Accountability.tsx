import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

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
