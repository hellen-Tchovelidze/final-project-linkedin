
import { db } from '../../../firebase/firebase-config';
import { addDoc, collection } from 'firebase/firestore';

export const sendFriendRequest = async (senderId: string, receiverId: string) => {
  await addDoc(collection(db, 'friend_requests'), {
    senderId,
    receiverId,
    status: 'pending',
    timestamp: new Date(),
  });

 
  await addDoc(collection(db, 'notifications'), {
    userId: receiverId,
    type: 'friend_request',
    from: senderId,
    read: false,
    timestamp: new Date(),
  });
};
