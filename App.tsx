import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './navigation/Navigation';
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
