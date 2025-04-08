'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { db } from '../../../firebase/firebase-config';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: any;
}

const Chat = () => {
  const searchParams = useSearchParams();
  const senderId = searchParams.get('sender');
  const receiverId = searchParams.get('receiver');

  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (!senderId || !receiverId) return;

    const chatId = [senderId, receiverId].sort().join('_'); 
    const messagesRef = collection(db, `chats/${chatId}/messages`);
    const q = query(messagesRef, orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [senderId, receiverId]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const chatId = [senderId, receiverId].sort().join('_');
    const messagesRef = collection(db, `chats/${chatId}/messages`);

    await addDoc(messagesRef, {
      senderId,
      receiverId,
      text: newMessage,
      timestamp: serverTimestamp(),
    });

    setNewMessage('');
  };

  return (
    <div className="p-6">
      <h1 className="text-xl">ჩატი</h1>

      <div className="h-64 overflow-y-auto bg-gray-100 p-4 rounded-md">
        {messages.map((msg) => (
          <div key={msg.id} className={`p-2 my-2 rounded-md ${msg.senderId === senderId ? 'bg-blue-500 text-white self-end' : 'bg-gray-300'}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="შეტყობინება..."
          className="border p-2 flex-grow"
        />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 ml-2">გაგზავნა</button>
      </div>
    </div>
  );
};

export default Chat;
