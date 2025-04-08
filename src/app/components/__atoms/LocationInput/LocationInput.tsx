
import React from 'react';

interface LocationInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <h1>Your Location</h1>
      <input
        type="text"
        placeholder="Your Location"
        value={value}
        onChange={onChange}
        
        className=' w-full p-3  border border-black'
      />
    </div>
  );
};

export default LocationInput;
