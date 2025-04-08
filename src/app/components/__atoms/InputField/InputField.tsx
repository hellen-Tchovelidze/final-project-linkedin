
'use client'
import React from 'react';
import { useStore } from '../../../store/store';

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, }) => {
  const { email, password, setEmail, setPassword } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={type === 'email' ? email : password}
        onChange={handleChange}

        className='w-full p-[10px] m-[10px] border border-black'
      />
    </div>
  );
};

export default InputField;
