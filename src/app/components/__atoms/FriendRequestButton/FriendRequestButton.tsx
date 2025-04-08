'use client';

import { useState, useEffect } from 'react';
import { sendFriendRequest } from '../../../Hooks/lib/sendFriendRequest'; 
import { getFriendRequestStatus } from '../../../Hooks/getFriendRequestStatus'; 

type Props = {
  currentUserId: string;
  targetUserId: string;
};

const FriendRequestButton = ({ currentUserId, targetUserId }: Props) => {
  const [status, setStatus] = useState<'none' | 'pending' | 'accepted' | 'rejected'>('none');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      const res = await getFriendRequestStatus(currentUserId, targetUserId);
      setStatus(res);
    };

    checkStatus();
  }, [currentUserId, targetUserId]);

  const handleSendRequest = async () => {
    setLoading(true);
    await sendFriendRequest(currentUserId, targetUserId);
    setStatus('pending');
    setLoading(false);
  };

  if (currentUserId === targetUserId) return null;

  return (
    <div>
      {status === 'none' && (
        <button onClick={handleSendRequest} disabled={loading} className="w-[110px] h-[40px] bg-blue-600 border text-white rounded-full">
          {loading ? '📥Send' : '👤+ Connect'}
        </button>
      )}
      {status === 'pending' && (
        <button disabled className="w-[110px] h-[40px] bg-green-200 border text-black border-black rounded-full">
          ✅Sent
        </button>
      )}
      {status === 'accepted' && (
        <button disabled className="px-4 py-2 bg-green-500 text-white rounded">
       Friends
        </button>
      )}
      {status === 'rejected' && (
        <button disabled className="px-4 py-2 bg-red-400 text-white rounded">
         Rejected
        </button>
      )}
    </div>
  );
};

export default FriendRequestButton;
