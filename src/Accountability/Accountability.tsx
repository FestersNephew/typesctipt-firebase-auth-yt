// Accountability.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import GroupContent from './GroupContent';
import UserContent from './UserContent';
import Challenge from './Challenge';

const Accountability = () => {
  const [selectedContent, setSelectedContent] = useState('person');

  const toggleContent = (content: React.SetStateAction<string>) => {
    setSelectedContent(content);
  };

  return (
    <View style={styles.contentContainer}>
      <Header
        onPersonPress={() => toggleContent('person')}
        onChartPress={() => toggleContent('chart')}
        onGroupPress={() => toggleContent('group')}
      />
      {selectedContent === 'person' && (
        <View>
          {/* Render the content for the 'person' view */}
          <Text>User Content</Text>
          <UserContent user={{
            uid: '',
            //photoURL: '',
            displayName: '',
            email: ''
          }} />
        </View>
      )}
      {selectedContent === 'chart' && (
        <View>
          {/* Render the content for the 'chart' view */}
          <Text>Challenge Content</Text>
          <Challenge/>
        </View>
      )}
      {selectedContent === 'group' && (
        <View>
          {/* Render the content for the 'group' view */}
          <Text>Group Content</Text>
          <GroupContent />
        </View>
      )}
    </View>
  );
};

export default Accountability;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10, // Add padding
  },
});