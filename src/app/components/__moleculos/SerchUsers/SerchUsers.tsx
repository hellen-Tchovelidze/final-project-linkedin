




'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getUsersByName } from '../../../../firebase/auth';

const SearchUsers = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!name) {
        setUsers([]);
        setError('');
        setShowDropdown(false);
        return;
      }
      try {
        const result = await getUsersByName(name);
        setUsers(result);
        setError(result.length === 0 ? 'No users found' : '');
        setShowDropdown(true);
      } catch (err) {
        setError('Failed to fetch users');
        setShowDropdown(true);
      }
    };

    fetchUsers();
  }, [name]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUserSelect = (uid: string) => {
    router.push(`/UserProfile?uid=${uid}&mode=readonly`);
    setShowDropdown(false);
    setName('');
  };

  return (
    <div className="relative w-[300px] max-md:max-w-[500px]  max-md:w-full " ref={wrapperRef}>
      <input
        type="text"
        placeholder="Search"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full h-10 p-3 border border-gray-300 rounded-md shadow-sm bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {showDropdown && (
        <div className="absolute top-full left-0 max-w-[500px] w-full bg-white shadow-lg rounded-md mt-2 z-50 max-h-96 overflow-y-auto overflow-x-hidden p-4">
          {error && <div className="text-red-500">{error}</div>}
          {users.length > 0 && (
            <ul className="space-y-3">
              {users.map((user) => (
                <li
                  key={user.uid}
                  className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-100 cursor-pointer transition"
                  onClick={() => handleUserSelect(user.uid)}
                >
                  <img
                    src={user.photoURL || '/avatar.png'}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-md font-semibold truncate">{user.firstName} {user.lastName}</p>
                    <p className="text-sm text-gray-600 truncate">Email: {user.email}</p>
                    <p className="text-sm text-gray-600 truncate">Location: {user.location || 'N/A'}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchUsers;

