
'use client';

import { useEffect, useState, Suspense } from 'react';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import imageCompression from 'browser-image-compression';
import { db } from '../../../../firebase/firebase-config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Header from '@/app/components/__organisms/Header/Header';
import Reclient from '@/app/components/__atoms/Reclient/Reclient';
import Defolt from '@/app/components/__atoms/defolt/defolt';
import FooterOnce from '@/app/components/__atoms/FooterOnce/FooterOnce';
import FriendRequestButton from '@/app/components/__atoms/FriendRequestButton/FriendRequestButton';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Image from 'next/image'

interface UserData {
  firstName: string;
  lastName: string;
  location: string;
  experience: string[];
  education: string[];
  skills: string[];
  avatar?: string;
  background?: string;
  uid: string;
}

const ProfilePageComponent: React.FC = () => {
  const searchParams = useSearchParams();
  const [uid, setUid] = useState<string | null>(null); 
  const [currentUserId, setCurrentUserId] = useState<string | null>(null); 
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const mode = searchParams.get('mode');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState<string[]>([]);
  const [education, setEducation] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [background, setBackground] = useState<string | null>(null);

 
  useEffect(() => {
    setUid(searchParams.get('uid'));
  }, [searchParams]);

  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserId(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  
  useEffect(() => {
    if (!uid) return;

    const fetchUserData = async () => {
      try {
        const userRef = doc(db, 'users', uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as UserData;
          setUserData(data);
          setFirstName(data.firstName);
          setLastName(data.lastName);
          setLocation(data.location);
          setExperience(data.experience || []);
          setEducation(data.education || []);
          setSkills(data.skills || []);
          setAvatar(data.avatar || null);
          setBackground(data.background || null);
        }
      } catch (error) {
        console.error('🔥 Firestore Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [uid]);

  
  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'avatar' | 'background'
  ) => {
    if (!e.target.files || !uid || mode === 'readonly') return;

    const file = e.target.files[0];
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const reader = new FileReader();

      reader.onloadend = async () => {
        const imageData = reader.result as string;

        if (type === 'avatar') setAvatar(imageData);
        else setBackground(imageData);

        const userRef = doc(db, 'users', uid);
        await updateDoc(userRef, { [type]: imageData });

        console.log(`${type} photo updated successfully!`);
      };

      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error('❌ Image Upload Error:', error);
    }
  };

  const handleUpdate = async () => {
    if (!uid || mode === 'readonly') return;
    try {
      const userRef = doc(db, 'users', uid);
      await updateDoc(userRef, {
        firstName,
        lastName,
        location,
        experience,
        education,
        skills,
      });
      console.log('მონაცემები წარმატებით განახლდა!');
    } catch (error) {
      console.error('❌ Update Error:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4 bg-[#F4F2EE]">
        <Image
          src={"/linkdeinicone.png"}
          alt="Copy Icon"
          width={700}
          height={700}
          className=' max-w-[200px] max-h-[200px]'
        />
        <div className="relative w-64 h-2 bg-gray-300 rounded overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-loading-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-[#F4F2EE] ">
        {uid && <Header uid={uid} />}

        <div className="flex justify-center gap-[3%] items-center max-md:flex-col max-md:p-2 max-md:gap-20 min-h-screen">
          <div 
          className="flex flex-col justify-evenly items-start gap-[3%] mt-[90px] bg-white rounded-lg max-w-[700px] w-full  max-md:mt-20 ">
            {userData ? (
              <>
                <div className="relative w-[700px] h-[300px] bg-black/10 flex justify-start items-end rounded-lg overflow-hidden">
                  {background && (
                    <Image src={background} alt="background" width={500} height={500} className="absolute w-full h-full object-cover" />
                  )}
                  <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'background')} disabled={mode === 'readonly'} />
                  <div className="relative w-24 h-24 bg-gray-800 rounded-full overflow-hidden">
                    {avatar ? (
                      <Image src={avatar} alt="avatar"  width={500} height={500} className="w-full h-full object-cover" />
                    ) : (
                      <div>

<Image
                        src={"/avatar.png"}
                        alt="avatar"
                        width={700}
                        height={700}
                        className='w-full h-full'
                      />
                      </div>
                        
                    
                      
                    )}
                    <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'avatar')} disabled={mode === 'readonly'} />
                  </div>
                </div>

                <div className='flex gap-1 p-7'> 
                  <div className="mt-4">
                    <h1> {firstName}</h1>
                  </div>
                  <div className="mt-4 ">
                    <h1>{lastName}</h1>
                  </div>
                </div>
                <div className="mt-4 p-7">
                  <h1> {location}</h1>
                </div>

                <div className='  flex w-[300px] justify-between p-7 gap-2'>
                  {currentUserId && uid && (
                    <FriendRequestButton currentUserId={currentUserId} targetUserId={uid} />
                  )}
                  <button className='w-[100px] h-[40px] bg-blue-100 border border-blue-500 rounded-full'>Message</button>
                  <button className='w-[70px] h-[40px] bg-gray-100 border border-black rounded-full'>More</button>
                </div>

                <div className="mt-4 p-7">
                  <h1>Work experience:</h1>
                  {experience.map((exp, i) => <h1 key={i}>{exp}</h1>)}
                </div>

                <div className="mt-4 p-7">
                  <h1>Education:</h1>
                  {education.map((edu, i) => <h1 key={i}>{edu}</h1>)}
                </div>

                <div className="mt-4 p-7">
                  <h1>skills:</h1>
                  {skills.map((skill, i) => <h1 key={i}>{skill}</h1>)}
                </div>
              </>
            ) : (
              <p className="text-gray-500">User information not found..</p>
            )}
          </div>

          <div className="flex flex-col justify-between gap-4 mt-[0px] max-md:w-full">
            <Defolt />
            <Reclient />
            <FooterOnce />
          </div>
        </div>
      </div>
    </Suspense>
    
  );
};

export default ProfilePageComponent;


