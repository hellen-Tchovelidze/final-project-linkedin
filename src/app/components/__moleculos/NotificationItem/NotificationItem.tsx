


'use client';

import { useEffect, useState } from 'react';
import { db } from '../../../../firebase/firebase-config'; 
import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';

type Props = {
  notification: {
    id: string;
    userId: string;
    type: string;
    from: string;
    read: boolean;
    timestamp: any;
  };
  currentUserId: string;
};

const NotificationItem = ({ notification, currentUserId }: Props) => {
  const [fromUserName, setFromUserName] = useState<string>('');

  useEffect(() => {
    const fetchFromUser = async () => {
      const fromUserRef = doc(db, 'users', notification.from);
      const fromUserSnap = await getDoc(fromUserRef);
      if (fromUserSnap.exists()) {
        const data = fromUserSnap.data();
        setFromUserName(`${data.firstName} ${data.lastName}`);
      }
    };

    fetchFromUser();
  }, [notification.from]);

  const acceptFriendRequest = async () => {
    const currentTime = serverTimestamp();

    const friendRef1 = doc(db, 'friends', `${currentUserId}_${notification.from}`);
    const friendRef2 = doc(db, 'friends', `${notification.from}_${currentUserId}`);

    await setDoc(friendRef1, {
      user1: currentUserId,
      user2: notification.from,
      createdAt: currentTime,
    });

    await setDoc(friendRef2, {
      user1: notification.from,
      user2: currentUserId,
      createdAt: currentTime,
    });

   
    const requestRef = doc(db, 'friend_requests', `${notification.from}_${currentUserId}`);
    await deleteDoc(requestRef);

    const notifRef = doc(db, 'notifications', notification.id);
    await deleteDoc(notifRef);
  };

  const declineFriendRequest = async () => {
    const requestRef = doc(db, 'friend_requests', `${notification.from}_${currentUserId}`);
    const notifRef = doc(db, 'notifications', notification.id);

    await deleteDoc(requestRef);
    await deleteDoc(notifRef);
  };

  return (
    <div className={`notification ${notification.read ? 'read' : 'unread'}`}>
      <p>
        {notification.type === 'friend_request'
          ? `${fromUserName} sent you a friend request`
          : `${notification.type} - ${fromUserName}`}
      </p>
      <p>{notification.timestamp.toDate().toLocaleString()}</p>

      {notification.type === 'friend_request' && (
        <div className="flex gap-2 mt-2">
          <button
            onClick={acceptFriendRequest}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Accept
          </button>
          <button
            onClick={declineFriendRequest}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Decline
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationItem;
