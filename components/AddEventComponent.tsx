import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import addEventToFirestore from './AddEventToFirestore';
import DateTimePicker from '@react-native-community/datetimepicker';

interface AddEventComponentProps {
  onClose: () => void;
}

const AddEventComponent: React.FC<AddEventComponentProps> = ({ onClose }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');


  const handleAddEvent = async () => {
    if (eventName) {
      const success = await addEventToFirestore({
        name: eventName,
        description: eventDescription,
        date: eventDate,
        location: eventLocation,
      });

      if (success) {
        onClose();
        setEventName('');
        setEventDescription('');
        setEventDate('');
        setEventLocation('');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Event</Text>
      <TextInput
        style={styles.input}
        placeholder="Event Name"
        value={eventName}
        onChangeText={setEventName}
      />
      <TextInput
        style={styles.input}
        placeholder="Event Description"
        value={eventDescription}
        onChangeText={setEventDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Event Date"
        value={eventDate}
        onChangeText={setEventDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Event Location"
        value={eventLocation}
        onChangeText={setEventLocation}
      />

      {/* Add more input fields for event details as needed */}
      <Button title="Add Event" onPress={handleAddEvent} />
      <Button title="Cancel" onPress={onClose} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 12,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
  },
});

export default AddEventComponent;
