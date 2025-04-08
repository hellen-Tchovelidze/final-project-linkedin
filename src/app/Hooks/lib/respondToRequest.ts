
import { db } from '../../../firebase/firebase-config';
import { doc, updateDoc, setDoc } from 'firebase/firestore';

export const respondToFriendRequest = async (
  requestId: string,
  senderId: string,
  receiverId: string,
  accept: boolean
) => {
  const requestRef = doc(db, 'friend_requests', requestId);

  if (accept) {
   
    await setDoc(doc(db, 'friends', `${senderId}_${receiverId}`), {
      users: [senderId, receiverId],
      timestamp: new Date(),
    });
    await updateDoc(requestRef, { status: 'accepted' });
  } else {
    await updateDoc(requestRef, { status: 'rejected' });
  }
};
