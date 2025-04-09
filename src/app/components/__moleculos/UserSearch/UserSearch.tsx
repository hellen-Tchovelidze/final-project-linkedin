


'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '../../../../firebase/firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import Image from 'next/image'


interface UserData {
  firstName: string;
  lastName: string;
  location: string;
  avatar?: string;
  background?: string;
}

interface UserSearchProps {
  uid: string;
}

const UserSearch: React.FC<UserSearchProps> = ({ uid }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  
  const router = useRouter();

  useEffect(() => {
    if (!uid) return;

    console.log("🔍 Fetching Firestore data for UID:", uid);

    const fetchUserData = async () => {
      try {
        const userRef = doc(db, 'users', uid);
        const docSnap = await getDoc(userRef);
        console.log("📜 Firestore Response:", docSnap.exists() ? docSnap.data() : "❌ No data found");

        if (docSnap.exists()) {
          const data = docSnap.data() as UserData;

         
          const localProfileData = JSON.parse(localStorage.getItem('userProfileData') || '{}');
          setUserData({ ...data, avatar: localProfileData.avatar || data.avatar, background: localProfileData.background || data.background });
        }
      } catch (error) {
        console.error('🔥 Firestore Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [uid]);

  if (loading) {
    return <p>loading...</p>;
  }

  const handleRedirect = () => {
    router.push(`/profile?uid=${uid}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[300px] w-full   h-[400px]">
      {userData ? (
        <div className=' flex flex-col justify-center items-center'>
         
          <div className="w-full h-24 bg-gray-200 relative rounded-t-lg overflow-hidden">
            {userData.background ? (
              <Image src={userData.background} alt="cover"  width={700}
              height={700} className="w-full h-full object-cover" />
            ) : (
              <p className="text-gray-500 text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Cover photo</p>
            )}
          </div>

          
          <div className="relative w-24 h-24 mx-auto -mt-12 border-4 border-white rounded-full overflow-hidden">
            {userData.avatar ? (
              < Image src={userData.avatar} alt="avatar" width={700}
              height={700} className="w-full h-full object-cover" />
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
          </div>

          <h1 className="text-lg mt-4">
            {userData.firstName} {userData.lastName}!
          </h1>
          <p>{userData.location}</p>

          <button onClick={handleRedirect} className="text-blue-500 mt-4 block justify-center items-center ">
           show more
          </button>
        </div>
      ) : (
        <p className="text-gray-500">no user found</p>
      )}
    </div>
  );
};

export default UserSearch;