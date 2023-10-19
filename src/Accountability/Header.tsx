// Header.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface HeaderProps {
  onPersonPress: () => void;
  onChartPress: () => void;
  onGroupPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPersonPress, onChartPress, onGroupPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPersonPress} style={styles.icon}>
        <MaterialCommunityIcons name="account" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onChartPress} style={styles.icon}>
        <MaterialCommunityIcons name="chart-bar" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onGroupPress} style={styles.icon}>
        <MaterialCommunityIcons name="account-group" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      paddingTop: 20, // Add top padding
      marginBottom: 10, // Add bottom margin
    },
    icon: {
      marginRight: 10,
    },
  });

export default Header;
