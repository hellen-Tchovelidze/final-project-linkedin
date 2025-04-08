

'use client'
import React from 'react';



interface RegisterButtonProps {
  onClick: () => void;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button
     
        onClick={onClick}
       className=' rounded-[30px] w-full p-[10px] bg-[#0a66c2] text-white cursor-pointer'
      >
       Agree & Join
      </button>
    </div>
  );
};

export default RegisterButton;
