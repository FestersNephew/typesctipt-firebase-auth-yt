import React from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import Navigation from './src/navigation/Navigation';
import './firebase/firebase';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
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