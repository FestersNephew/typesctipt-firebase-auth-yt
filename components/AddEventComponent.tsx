import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, Platform, TouchableOpacity } from 'react-native';
import addEventToFirestore from './AddEventToFirestore';
import DateTimePicker from '@react-native-community/datetimepicker';

interface AddEventComponentProps {
  onClose: () => void;
}

const AddEventComponent: React.FC<AddEventComponentProps> = ({ onClose }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('' as string | undefined);
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

      if (Platform.OS === 'android') {
        toggleDatePicker();
        setEventDate(currentDate.toDateString());
      }

    } else {
      setShowPicker(false);
    }
  };
  
  const confirmIOSDate = () => {
    setEventDate(date.toDateString());
    toggleDatePicker();
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Event</Text>
      <TextInput
        style={styles.input}
        placeholder="Event Name"
        placeholderTextColor="#201D28"
        value={eventName}
        onChangeText={setEventName}
      />
      <TextInput
        style={styles.input}
        placeholder="Event Description"
        placeholderTextColor="#201D28"
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
          style={styles.datePicker}
        />
      )}

      {showPicker && Platform.OS === 'ios' && (
        <View
          style={{ flexDirection: "row", 
          justifyContent: "space-around"}}
        >
          <TouchableOpacity style={[
            styles.button,
            styles.pickerButton,
              { backgroundColor: "red" }
            ]}
            onPress={toggleDatePicker}
            >
            <Text 
              style={[
                styles.buttonText, { color: "white" }
              ]}
            >Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[
            styles.button,
            styles.pickerButton,
            ]}
            onPress={confirmIOSDate}
            >
            <Text 
              style={[
                styles.buttonText,
              ]}
            >Confirm</Text>
          </TouchableOpacity>

        </View>
        )}

      {!showPicker && (
        <Pressable>
          <TextInput
            style={styles.input}
            placeholder="Event Date"
            value={eventDate}
            placeholderTextColor="#201D28"
            onChangeText={Date}
            editable={false}
            onPressIn={toggleDatePicker}
          />
        </Pressable>
      )}

      <TextInput
        style={styles.input}
        placeholder="Event Location"
        placeholderTextColor="#201D28"
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
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 16,
  },
  datePicker: {
    height: 120,
    marginTop: -10,
    color: "#201D28",
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#075985"
  },
  pickerButton: {
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
});

export default AddEventComponent;
