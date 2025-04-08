
'use client'
import React from 'react';
import { useStore } from '../../../store/store';

const StudentStatus: React.FC = () => {
  const { isStudent, setIsStudent } = useStore();

  return (
    <div className="mb-4">
      <label className="block text-lg font-medium mb-2">Are you a student?</label>
      <select
        value={isStudent ? 'Yes' : 'No'}
        onChange={(e) => setIsStudent(e.target.value === 'Yes')}
        className="w-full p-3 border border-gray-300 rounded-lg"
      >
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>
    </div>
  );
};

export default StudentStatus;
