'use client';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface UserData {
  firstName: string;
  lastName: string;
  location: string;
}

const UserProfile: React.FC = () => {
  const router = useRouter();
  const { query } = router;
  
  const [userData, setUserData] = useState<UserData | null>(null);
  const [experience, setExperience] = useState<string>('');
  

  useEffect(() => {
    if (query.firstName && query.lastName && query.location) {
      setUserData({
        firstName: query.firstName as string,
        lastName: query.lastName as string,
        location: query.location as string,
      });
    }
  }, [query]);

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(e.target.value);
  };

  return (
    <div className="p-6">
      {userData ? (
        <>
          <h1 className="text-xl">{userData.firstName} {userData.lastName}</h1>
          <p>{userData.location}</p>

          <h2 className="mt-4">work expariens</h2>
          <input 
            type="text" 
            value={experience}
            onChange={handleExperienceChange}
            placeholder="work expariens"
            className="border p-2 mt-2 w-full"
          />
        </>
      ) : (
        <p className="text-gray-500">no user found</p>
      )}
    </div>
  );
};

export default UserProfile;
