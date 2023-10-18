import React from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import Navigation from './src/navigation/Navigation';
import './firebase/firebase';

export default function App() {
  return (
      <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201D28',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('MyApp', () => App);