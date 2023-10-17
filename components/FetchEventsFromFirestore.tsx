import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

// Define the Event type to match your data structure
interface Event {
  id: string;
  eventName: string;
  description?: string;
  date?: string;
  location?: string;
  // Include any other properties if necessary
}

const fetchEventsFromFirestore = async (): Promise<Event[]> => {
  try {
    const eventsRef = collection(db, 'calendarEvents');
    const querySnapshot = await getDocs(eventsRef);

    const events: Event[] = [];

    querySnapshot.forEach((doc) => {
      const eventData = doc.data();

      const event: Event = {
        id: doc.id,
        eventName: eventData.name,
        description: eventData.description,
        date: eventData.date,
        location: eventData.location,
        // Include other properties if needed
      };

      events.push(event);
    });

    return events;
  } catch (error) {
    console.error('Error fetching events from Firestore:', error);
    return [];
  }
};

export default fetchEventsFromFirestore;
