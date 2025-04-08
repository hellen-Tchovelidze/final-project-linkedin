
import { db } from '../../../firebase/firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getUserFriends = async (userId: string) => {
  const q = query(
    collection(db, 'friends'),
    where('users', 'array-contains', userId)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => doc.data().users.filter((id: string) => id !== userId)[0]);
};
