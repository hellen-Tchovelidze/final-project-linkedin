




'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../../../firebase/firebase-config';
import { updateUserLocation } from '../../../../firebase/auth';
import LocationInput from '../../__atoms/LocationInput/LocationInput';
import ErrorMessage from '../../__atoms/ErrorMessage/ErrorMessage';
import SaveButton from '../../__atoms/SaveButton/SaveButton';
import Image from 'next/image';
import { useStore } from '../../../store/store';

const WorkExperience = () => {
  // const { isStudent, position, employmentType, experience } = useStore();
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  


  useEffect(() => {
    
    const user = auth.currentUser;
    if (!user) {
      setError('User is not logged in');
      router.push('/login'); 
    }
  }, [router]);

  const handleLocationUpdate = async () => {
    try {
      const user = auth.currentUser;
      if (user && user.uid) {
        await updateUserLocation(location); 
        console.log('Location updated:', location);

        router.push(`/success?uid=${user.uid}`);
      } else {
        setError('No user is logged in');
      }
    } catch (err) {
      setError('Location update failed. Please try again.');
    }
  };


  return (
    <div className="  flex flex-col min-h-screen justify-center items-center p-6 bg-[#F4F2EE]">
       <Image
          src="/linkdeinicone.png"
          alt="LinkedIn Icon"
          width={150}
          height={150}
          className="mx-auto mb-4 cursor-pointer"
        />
        <h1 className="text-[32px]">Complete Your Location</h1>
      <div  >
       
        {error && <ErrorMessage message={error} />}
        <div className="p-7 bg-white w-[400px] h-[200px] flex flex-col gap-2 max-sm:w-[300px]">
          <LocationInput value={location} onChange={(e) => setLocation(e.target.value)} />
          <SaveButton onClick={handleLocationUpdate} />
        </div>

      </div>
    </div>
  );
};

export default WorkExperience;
