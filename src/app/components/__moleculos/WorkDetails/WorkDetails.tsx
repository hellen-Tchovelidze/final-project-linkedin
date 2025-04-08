'use client'

import React from 'react';
import { useStore } from '../../../store/store';

const WorkDetails: React.FC = () => {
  const { experience, setExperience, position, setPosition, employmentType, setEmploymentType } =
    useStore();

  return (
    <>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Work Experience</label>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Describe your work experience here"
          className="w-full h-[100px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Select your Position</label>
        <select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        >
          <option value="">Select Position</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="Software Engineer">Software Engineer</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Employment Type</label>
        <select
          value={employmentType}
          onChange={(e) => setEmploymentType(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        >
          <option value="">Select Employment Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Freelance">Freelance</option>
          <option value="Internship">Internship</option>
        </select>
      </div>
    </>
  );
};

export default WorkDetails;
