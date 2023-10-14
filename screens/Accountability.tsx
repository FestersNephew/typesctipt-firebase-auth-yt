import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Accountability = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accountability</Text>
      {/* Add your content for the Accountability screen here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set your desired background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Add additional styles as needed
});

export default Accountability;
