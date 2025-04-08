



import { db } from '../../../firebase/firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';

export type UserNotification = {
  id: string;
  userId: string;
  type: string;
  from: string;
  read: boolean;
  timestamp: any;
};

export const getUserNotifications = async (userId: string): Promise<UserNotification[]> => {
  const q = query(collection(db, 'notifications'), where('userId', '==', userId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      userId: data.userId,
      type: data.type,
      from: data.from,
      read: data.read,
      timestamp: data.timestamp,
    };
  });
};
