import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';

// Define an interface for the event object
interface Event {
  id: string; // Replace 'string' with the appropriate type for the event's ID
  eventName: string; // Replace 'string' with the appropriate type for the event's name
}

const EventListScreen = () => {
  const [events, setEvents] = useState<Event[]>([]); // Specify the type as an array of Event objects

  useEffect(() => {
    // Fetch upcoming events from Firebase and set them in the 'events' state
    // Update the state with the fetched events
    const fetchedEvents: Event[] = []; // Replace this with your actual data fetching logic
    setEvents(fetchedEvents);
  }, []);

  return (
    <View>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.eventName}</Text>}
      />
    </View>
  );
};

export default EventListScreen;
