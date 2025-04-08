


'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../../../firebase/firebase-config';
import { updateProfile } from 'firebase/auth';
import { db } from '../../../../firebase/firebase-config';
import { doc, setDoc } from 'firebase/firestore';
import ProfileForm from '../../__moleculos/ProfileForm/ProfileForm';
import ErrorMessage from '../../__atoms/ErrorMessage/ErrorMessage';
import ProfileUpdateButton from '../../__atoms/ProfileUpdateButton/ProfileUpdateButton';
import { useStore } from '../../../store/store';
import Image from 'next/image';

const CompleteProfile = () => {
  const { firstName, lastName, setFirstName, setLastName, setError, error } = useStore();
  const router = useRouter();

  const handleProfileUpdate = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
       
        await updateProfile(user, {
          displayName: `${firstName} ${lastName}`,
        });

       
        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef, {
          firstName: firstName,
          lastName: lastName,
          email: user.email,
          createdAt: new Date(),
        }, { merge: true });

       
        router.push(`/location`)

      } else {
        setError('No user is logged in');
      }
    } catch (err) {
      setError('Profile update failed. Please try again.');
    }
  };

  return (
    <div className='bg-[#F4F2EE] h-screen w-full flex justify-start items-center flex-col'>
      <Image
        src={"/linkdeinicone.png"}
        alt="LinkedIn Icon"
        width={700}
        height={700}
        className='max-w-[150px] max-h-[150px] cursor-pointer'
      />
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-[32px] p-5'>Make the most of your professional life</h2>
        <div className='w-[400px] m-auto p-5 bg-white'>
          {error && <ErrorMessage message={error} />}
          <ProfileForm
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
          />
          <ProfileUpdateButton handleProfileUpdate={handleProfileUpdate} />
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
