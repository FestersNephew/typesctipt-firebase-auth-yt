// fetchUserData.ts

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import  { UserData } from '../screens/Signup';

const fetchUserData = async (uid: string): Promise<UserData | null> => {
    try {
      const userRef = doc(db, 'users', uid);
      const userSnapshot = await getDoc(userRef);
  
      if (userSnapshot.exists()) {
        return userSnapshot.data() as UserData;
      }
  
      return null;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };
  
  export default fetchUserData;
