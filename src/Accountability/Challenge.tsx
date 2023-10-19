// PersonContent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Challenge = () => {
  return (
    <View style={styles.contentContainer}>
      <Text>This is where you will see the users Profile, about them, completed challenges, challenges levied, etc...</Text>
    </View>
  );
};

export default Challenge;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10, // Add padding
    backgroundColor: 'blue',
  },
});
