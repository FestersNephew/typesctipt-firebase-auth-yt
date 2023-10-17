import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase'; // Import your Firebase configuration

// Function to add an event to Firestore
const addEventToFirestore = async (eventData: { name: string; description: string; date: number; location: string; }) => {
    try {
      // Reference to the "events" collection in Firestore (change "events" to your collection name)
      const eventsRef = collection(db, 'calendarEvents');
  
      // Add a new document to the "events" collection
      await addDoc(eventsRef, eventData);
  
      console.log('Event added to Firestore successfully');
      return true;
    } catch (error) {
      console.error('Error adding event to Firestore:', error);
      return false;
    }
  };

export default addEventToFirestore;
