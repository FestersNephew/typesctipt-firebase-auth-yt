import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Import Firebase modules
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase'; 

interface ProfileEditProps {
    user: {
      uid: string;
    };
    userData: {
      goals12Months: string;
      goals1Month: string;
      favoriteQuote: string;
      location: string;
    };
    onClose: (editedUserData: any) => void;
  }

  const ProfileEdit: React.FC<ProfileEditProps> = ({ user, userData, onClose }) => {
    const [editedUserData, setEditedUserData] = useState(userData);
    const { goals12Months, goals1Month, favoriteQuote, location } = editedUserData;
  

  const updateUserProfile = async () => {
    const userRef = doc(db, 'users', user.uid);

    try {
      await updateDoc(userRef, {
        goals12Months,
        goals1Month,
        favoriteQuote,
        location,
      });

      // Update the local user data if the update is successful
      onClose(editedUserData);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.editHeader}>Edit Profile</Text>
      
      <TextInput
        style={styles.input}
        placeholder="12 Month Goals"
        value={goals12Months}
        onChangeText={(text) => setEditedUserData({ ...editedUserData, goals12Months: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="1 Month Goals"
        value={goals1Month}
        onChangeText={(text) => setEditedUserData({ ...editedUserData, goals1Month: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Favorite Quote"
        value={favoriteQuote}
        onChangeText={(text) => setEditedUserData({ ...editedUserData, favoriteQuote: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={(text) => setEditedUserData({ ...editedUserData, location: text })}
      />
      <TouchableOpacity style={styles.saveButton} onPress={updateUserProfile}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  editHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileEdit;
