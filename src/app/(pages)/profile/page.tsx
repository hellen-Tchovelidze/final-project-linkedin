




'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import imageCompression from 'browser-image-compression';
import { db } from '../../../firebase/firebase-config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Header from '../../components/__organisms/Header/Header';
import Reclient from '../../components/__atoms/Reclient/Reclient';
import Defolt from '@/app/components/__atoms/defolt/defolt';
import FooterOnce from '@/app/components/__atoms/FooterOnce/FooterOnce';
import dynamic from 'next/dynamic';
const FriendsList = dynamic(() => import('../../components/__moleculos/FriendsList/FriendsList'), { ssr: false });




interface UserData {
  firstName: string;
  lastName: string;
  location: string;
  experience: string[];
  education: string[];
  skills: string[];
  avatar?: string;
  background?: string;

}



const ProfilePage: React.FC = () => {
  const searchParams = useSearchParams();
  const [uid, setUid] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

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
    if (!e.target.files || !uid) return;

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

        if (type === 'avatar') {
          setAvatar(imageData);
        } else {
          setBackground(imageData);
        }


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
    if (!uid) return;

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

  const handleAddExperience = () => {
    setExperience((prev) => [...prev, '']);
  };

  const handleRemoveExperience = (index: number) => {
    setExperience((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddEducation = () => {
    setEducation((prev) => [...prev, '']);
  };

  const handleRemoveEducation = (index: number) => {
    setEducation((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddSkill = () => {
    setSkills((prev) => [...prev, '']);
  };

  const handleRemoveSkill = (index: number) => {
    setSkills((prev) => prev.filter((_, i) => i !== index));
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
    <div className="bg-[#F4F2EE]">
     
      {uid && <Header uid={uid} />}
      <div className="flex justify-center gap-[3%] items-center max-md:flex-col max-md:p-2 max-md:gap-20">

        <div className="flex flex-col justify-evenly items-start gap-[3%] mt-[5%] bg-white rounded-lg max-w-[700px] w-full  max-md:mt-20">
          {userData ? (
            <>

              <div className="relative w-full h-[300px] bg-black/55 flex justify-start items-end rounded-lg overflow-hidden ">
                {background ? (
                  <img
                    src={background}
                    alt="background"
                    className="absolute w-full h-full object-cover"
                  />
                ) : (
                  <p className="text-white text-center"></p>
                )}
                <label className="absolute bottom-2 right-2  bg-black/50 text-white px-3 py-1 cursor-pointer  rounded-md ">
                Upload a cover photo
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e, 'background')}
                  />
                </label>

                <div className="relative w-24 h-24 bg-gray-800 rounded-full overflow-hidden ">
                  {avatar ? (
                    <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
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
                  <label className="absolute bottom-0 bg-black/50 w-full  text-center text-white text-sm cursor-pointer py-1">
                  Upload
                    <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'avatar')} />
                  </label>
                </div>
              </div>




              <div className=' flex justify-start gap-[2%] p-7'>

                <div className=' flex flex-col'>
             <div className=' flex max-[400px]:flex-col'>    <div className="mt-4">
               
               <input
                 type="text"
                 value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}
                 className=" p-2 w-full mt-1 text-black "
               />
             </div>
             <div className="mt-4">
              
               <input
                 type="text"
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}
                 className=" p-2 w-full mt-1 text-black"
               />
             </div></div>
             <div className="mt-4">
             
               <input
                 type="text"
                 value={location}
                 onChange={(e) => setLocation(e.target.value)}
                 className=" p-2 w-full mt-1 text-gray-700"
               />
             </div>
                </div>
              </div>


              <div className="mt-4 p-7 flex-col flex max-w-[700px] w-full">
              <div className=' flex justify-between items-center max-w-[500px] w-full'>  <label>Experience</label>
                <button
                  onClick={handleAddExperience}
                  className="  p-2 rounded-md text-[40px] flex justify-center items-center mt-[-20px] "
                >
                +
                </button></div>
                {experience.map((exp, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <textarea
                     
                      value={exp}
                      onChange={(e) =>
                        setExperience((prev) => prev.map((item, i) => (i === index ? e.target.value : item)))
                      }
                      className="border p-2 w-full"
                    />
                    <button
                      onClick={() => handleRemoveExperience(index)}
                      className="  p-2 rounded-md"
                    >
                      ❌
                    </button>
                  </div>
                ))}
               
              </div>
<div className='h-[1px] w-full bg-[#434242]'></div>
              <div className="mt-4 p-7 flex-col flex max-w-[700px] w-full">
              <div className=' flex justify-between items-center max-w-[500px] w-full'>
              <label>Education</label>
                <button
                  onClick={handleAddEducation}
                  className=" p-2 rounded-md text-[40px] flex justify-center items-center mt-[-20px]"
                >
                 +
                </button>
              </div>
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <textarea
                     
                      value={edu}
                      onChange={(e) =>
                        setEducation((prev) => prev.map((item, i) => (i === index ? e.target.value : item)))
                      }
                      className="border p-2 w-full"
                    />
                    <button
                      onClick={() => handleRemoveEducation(index)}
                      className="p-2 rounded-md"
                    >
                      ❌
                    </button>
                  </div>
                ))}
               
              </div>

              <div className='h-[0.5px] w-full bg-[#434242]'></div>
              <div className="mt-4 p-7 flex-col flex max-w-[700px] w-full">
              <div className=' flex justify-between items-center max-w-[500px] w-full'>
              <label>Skills</label>
                <button
                  onClick={handleAddSkill}
                  className="p-2 rounded-md text-[40px] flex justify-center items-center mt-[-20px]"
                >
                 +
                </button>
              </div>
                {skills.map((skill, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <textarea
                     
                      value={skill}
                      onChange={(e) =>
                        setSkills((prev) => prev.map((item, i) => (i === index ? e.target.value : item)))
                      }
                      className="border p-2 w-full"
                    />
                    <button
                      onClick={() => handleRemoveSkill(index)}
                      className=" p-2 rounded-md"
                    >
                      ❌
                    </button>
                  </div>
                ))}
               
              </div >
              <div className='h-[1px] w-full bg-[#434242]'></div>
              <button
                onClick={handleUpdate}
                className="  text-blue-700 border-blue-700 border   rounded-full w-auto p-7 h-14 mb-8 flex justify-center items-center mt-7 ml-5"
              >
                Update 
              </button>
            </>
          ) : (
            <p className="text-gray-500">no users</p>
          )}
        </div>
        <div className="flex flex-col justify-between gap-4 mt-[-8%] max-md:w-full">
          {uid && <FriendsList userId={uid} />}

       <div className=' max-md:hidden'>
       <Defolt />
          <Reclient />
          <FooterOnce />
       </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
