import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/Colors';
import { signOut } from '@firebase/auth'; 
import { auth } from '../firebase/firebase';

const Settings = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out the user using Firebase Auth
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {/* Add your content for the Accountability screen here */}
      <Button title="Log Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Add additional styles as needed
});

export default Settings;
