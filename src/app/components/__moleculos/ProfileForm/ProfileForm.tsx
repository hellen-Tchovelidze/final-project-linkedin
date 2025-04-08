'use client';

import React from 'react';

interface ProfileFormProps {
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ firstName, setFirstName, lastName, setLastName }) => {
  return (
    <>
      <div>
        <h1>First Name</h1>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        
          className=' w-full p-[10px] mt-2 mb-3 border border-black'
        />
      </div>
      <div>
        <h1>Last Name</h1>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}

          className=' w-full p-[10px] mt-2 mb-3 border border-black'
        />
      </div>
    </>
  );
};

export default ProfileForm;
