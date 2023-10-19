// GroupContent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const GroupContent = () => {
  return (
    <View style={styles.contentContainer}>
      <Text>Stats and Data on the group and their completed challenges.</Text>
      {/* Add your content specific to the "Group" view here */}
    </View>
  );
};

export default GroupContent;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10, // Add padding
    backgroundColor: Colors.secondary,
  },
});
