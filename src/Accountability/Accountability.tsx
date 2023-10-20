import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import GroupContent from './GroupContent';
import UserContent from './UserContent';
import Challenge from './Challenge';
import { User } from 'firebase/auth'; // Import the User type

type Props = {
  user: User | null; // Define the type of the "user" prop
};

const Accountability: React.FC<Props> = ({ user }) => {
  const [selectedContent, setSelectedContent] = useState('person');

  const toggleContent = (content: string) => {
    setSelectedContent(content);
  };

  if (!user) {
    // Handle the case when the user is not logged in
    return (
      <View style={styles.contentContainer}>
        <Text>Please log in to access this screen.</Text>
      </View>
    );
  }

  return (
    <View style={styles.contentContainer}>
      <Header
        onPersonPress={() => toggleContent('person')}
        onChartPress={() => toggleContent('chart')}
        onGroupPress={() => toggleContent('group')}
      />
      {selectedContent === 'person' && (
        <View>
          <Text>User Content</Text>
          <UserContent user={user} />
        </View>
      )}
      {selectedContent === 'chart' && (
        <View>
          <Text>Challenge Content</Text>
          <Challenge />
        </View>
      )}
      {selectedContent === 'group' && (
        <View>
          <Text>Group Content</Text>
          <GroupContent />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
  },
});

export default Accountability;
