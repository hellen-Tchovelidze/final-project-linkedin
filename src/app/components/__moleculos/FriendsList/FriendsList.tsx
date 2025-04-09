'use client';

import { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/firebase-config';
import Image from 'next/image';

type User = {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
};

const FriendsList = ({ userId }: { userId: string }) => {
  const [friends, setFriends] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const fetchFriends = async () => {
      try {
        const friendsRef = collection(db, 'friends');

        const q1 = query(friendsRef, where('user1', '==', userId));
        const q2 = query(friendsRef, where('user2', '==', userId));

        const [snap1, snap2] = await Promise.all([getDocs(q1), getDocs(q2)]);

        const uids1 = snap1.docs.map((doc) => doc.data().user2);
        const uids2 = snap2.docs.map((doc) => doc.data().user1);

        const allUids = [...new Set([...uids1, ...uids2])];

        const userDocs = await Promise.all(
          allUids.map(async (uid) => {
            const res = await getDoc(doc(db, 'users', uid));
            return res.exists() ? { id: uid, ...res.data() } as User : null;
          })
        );

        setFriends(userDocs.filter(Boolean) as User[]);
      } catch (error) {
        console.error('❌ Friends Fetch Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, [userId]);

  if (loading) return <p>Loading friends...</p>;

  return (
    <div className="bg-white  rounded-lg p-4 shadow-md ">
      <h1 className="text-lg font-semibold mb-4">Friends</h1>
      {friends.length === 0 ? (
        <p className="text-gray-500">No friends found.</p>
      ) : (
        <ul className="space-y-2">
          {friends.map((friend) => (
            <li key={friend.id} className="flex items-center gap-2">
              {friend.avatar ? (
                <Image  src={friend.avatar} alt="avatar"  width={500} height={500} className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-300" />
              )}
              <span>{friend.firstName} {friend.lastName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendsList;
