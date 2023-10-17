import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import addEventToFirestore from './AddEventToFirestore';
import DateTimePicker from '@react-native-community/datetimepicker';

interface AddEventComponentProps {
  onClose: () => void;
}

const AddEventComponent: React.FC<AddEventComponentProps> = ({ onClose }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [eventLocation, setEventLocation] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const handleAddEvent = async () => {
    if (eventName) {
      const success = await addEventToFirestore({
        name: eventName,
        description: eventDescription,
        date: date.getTime(), 
        location: eventLocation,
      });
  
      if (success) {
        onClose();
        setEventName('');
        setEventDescription('');
        setDate(new Date()); 
        setEventLocation('');
      }
    }
  };
  

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = (event: any, selectedDate: Date | undefined) => {
    if (event.type === "set") {
      const currentDate = selectedDate || new Date();
      setShowPicker(false);
      setDate(currentDate);
    } else {
      setShowPicker(false);
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

      <Button title="Pick a Date" onPress={toggleDatePicker} />

      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChange}
        />
      )}

      <Pressable>
      <TextInput
        style={styles.input}
        placeholder="Event Date"
        onChangeText={Date}
        editable={false}
      />
      </Pressable>

      <TextInput
        style={styles.input}
        placeholder="Event Location"
        value={eventLocation}
        onChangeText={setEventLocation}
      />

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
