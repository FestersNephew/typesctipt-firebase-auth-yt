import React, { useEffect, useState } from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import fetchEventsFromFirestore from './FetchEventsFromFirestore';
import { RootStackParamList } from '../navigation/NavigationTypes';
import Colors from '../constants/Colors';

// Define the Event type to match your data structure
interface Event {
  id: string;
  eventName: string;
  description?: string;
  date: string;
}

const EventListScreen = () => {
  const [events, setEvents] = useState<Event[]>([]);

useEffect(() => {
    const fetchEvents = async () => {
        const fetchedEvents = await fetchEventsFromFirestore() as unknown as Event[];
        setEvents(fetchedEvents.filter(event => event.date !== undefined));
    };

    fetchEvents();
}, []);

  // Define a function to render an event card
  const renderEventCard = ({ item }: { item: Event }) => (
    <View style={styles.eventCard}>
      <Text style={styles.eventName}>{item.eventName}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
      <Text style={styles.eventDate}>{new Date(item.date as unknown as number).toDateString()}</Text>
    </View>
  );

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateToCalendarComponent = () => {
    navigation.navigate('CalendarComponent');
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Back to Calendar" onPress={navigateToCalendarComponent} />
      </View>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderEventCard}
      />
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
  eventDescription: {
    fontSize: 16,
  },
  eventDate: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    border: 'solid',
    borderWidth: 1,
    borderColor: Colors.primary,
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
  }
});

export default EventListScreen;
