'use client';

import React from 'react';

interface ProfileUpdateButtonProps {
  handleProfileUpdate: () => void;
}

const ProfileUpdateButton: React.FC<ProfileUpdateButtonProps> = ({ handleProfileUpdate }) => {
  return (
    <div>
      <button
      className=' rounded-[30px] w-full p-[10px] bg-[#0a66c2] text-white cursor-pointer'
        onClick={handleProfileUpdate}
       

      >
      Continue
      </button>
    </div>
  );
};

export default ProfileUpdateButton;
