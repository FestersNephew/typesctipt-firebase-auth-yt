import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import fetchEventsFromFirestore from './FetchEventsFromFirestore';

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
        const fetchedEvents = await fetchEventsFromFirestore() as Event[];
        setEvents(fetchedEvents.filter(event => event.date !== undefined));
    };

    fetchEvents();
}, []);

  // Define a function to render an event card
  const renderEventCard = ({ item }: { item: Event }) => (
    <View style={styles.eventCard}>
      <Text style={styles.eventName}>{item.eventName}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
      <Text style={styles.eventDate}>{item.date}</Text>
    </View>
  );

  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id}
      renderItem={renderEventCard}
    />
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
});

export default EventListScreen;
