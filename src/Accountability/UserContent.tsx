import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import fetchUserData from './fetchUserData'; // Import the fetchUserData function
import { UserData } from '../screens/Signup'; // Import the UserData type
import { User } from 'firebase/auth';

type UserContentProps = {
  user: User;
};

const UserContent: React.FC<UserContentProps> = ({ user }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        if (user.uid) {
          const userDoc = await fetchUserData(user.uid);

          if (userDoc) {
            setUserData(userDoc);
          }
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    loadUserData();
  }, [user]); // Add user as a dependency

  if (loading) {
    return <Text>Loading...</Text>;
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userName}>{userData?.name || 'Loading...'}</Text>
        <Text style={styles.userEmail}>{userData?.email || 'Loading...'}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userInfoTitle}>12 Month Goals</Text>
        <Text style={styles.userInfoText}>{userData?.goals12Months || 'Loading...'}</Text>

        <Text style={styles.userInfoTitle}>1 Month Goals</Text>
        <Text style={styles.userInfoText}>{userData?.goals1Month || 'Loading...'}</Text>

        <Text style={styles.userInfoTitle}>Favorite Quote</Text>
        <Text style={styles.userInfoText}>{userData?.favoriteQuote || 'Loading...'}</Text>

        <Text style={styles.userInfoTitle}>Location</Text>
        <Text style={styles.userInfoText}>{userData?.location || 'Loading...'}</Text>
      </View>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => console.log('Edit button pressed')}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userEmail: {
    fontSize: 16,
  },
  userInfo: {
    marginTop: 20,
  },
  userInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userInfoText: {
    fontSize: 16,
    marginTop: 5,
  },
  editButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default UserContent;
