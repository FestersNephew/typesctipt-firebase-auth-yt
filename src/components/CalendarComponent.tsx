import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Modal, Button, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AddEventComponent from './AddEventComponent';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/NavigationTypes';
import fetchEventsFromFirestore from './FetchEventsFromFirestore';

// Define the Event type to match your data structure
interface Event {
  id: string;
  eventName: string;
  date?: number; // Make the date field optional
}

type CalendarComponentProps = {
  navigation: NavigationProp<RootStackParamList, 'CalendarComponent'>;
};

const CalendarComponent: React.FC<CalendarComponentProps> = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [events, setEvents] = useState<Event[]>([]);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateToEventListScreen = () => {
    navigation.navigate('EventListScreen');
  };

  useEffect(() => {
    fetchEventsFromFirestore()
      .then((fetchedEvents: Event[]) => {
        setEvents(fetchedEvents);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <View style={styles.calendar}>
      <Calendar onDayPress={(day) => console.log('selected day', day)} />
      <View style={styles.buttons}>
        <Button title="Add Event" onPress={() => setModalVisible(true)} />
        <Button title="View Events" onPress={navigateToEventListScreen} />
      </View>
      {events.length > 0 && (
        <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <Text style={styles.eventName}>{item.eventName}</Text>
            <Text style={styles.eventDate}>{new Date(item.date as number).toDateString()}</Text>
          </View>
          )}
        />
      )}
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <AddEventComponent onClose={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 16,
    color: 'gray', // Adjust the color as needed
  },
  calendar: {
    flex: 1,
    margin: 10,
    paddingTop: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default CalendarComponent;
