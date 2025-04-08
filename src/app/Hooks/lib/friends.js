
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

export const addFriendToList = async (senderId, receiverId) => {
  await setDoc(doc(db, 'friends', senderId, receiverId), { friendId: receiverId, timestamp: new Date() });
  await setDoc(doc(db, 'friends', receiverId, senderId), { friendId: senderId, timestamp: new Date() });

  console.log(`${senderId} and ${receiverId} now the are friends!`);
};
