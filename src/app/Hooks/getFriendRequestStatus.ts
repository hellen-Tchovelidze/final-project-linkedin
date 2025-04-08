
import { db } from '../../firebase/firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getFriendRequestStatus = async (userA: string, userB: string) => {
  const q = query(
    collection(db, 'friend_requests'),
    where('senderId', '==', userA),
    where('receiverId', '==', userB)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) return 'none';

  const data = snapshot.docs[0].data();
  return data.status; 
};
