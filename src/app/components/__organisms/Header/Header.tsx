

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '../../../../firebase/firebase-config';
import { doc, getDoc, collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import SearchUsers from '../../__moleculos/SerchUsers/SerchUsers';
import NotificationItem from '../../__moleculos/NotificationItem/NotificationItem'; 
import HeaderDefoltComponent from '../../__atoms/HeaderDefoltComponent/HeaderDefoltComponent';
import { getAuth } from 'firebase/auth';
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

interface Notification {
  id: string;
  userId: string;
  type: string;
  from: string;
  read: boolean;
  timestamp: any;
}

const Header: React.FC<UserSearchProps> = ({ uid }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // კლივენტური მხარე
  }, []);


  const Avatar: React.FC<{ src?: string; alt?: string; size?: string }> = ({ src, alt = "Avatar", size = "w-24 h-24" }) => (
    <div className={`relative ${size} border-4 border-white rounded-full overflow-hidden`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <p className="text-gray-500 text-sm text-center">{alt}</p>
      )}
    </div>
  );

  useEffect(() => {
    if (!uid) return;

    const fetchUserData = async () => {
      try {
        const userRef = doc(db, 'users', uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as UserData;
          const localProfileData = JSON.parse(localStorage.getItem('userProfileData') || '{}');
          setUserData({ ...data, avatar: localProfileData.avatar || data.avatar, background: localProfileData.background || data.background });
        }
      } catch (error) {
        console.error('Firestore Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [uid]);

  useEffect(() => {
    if (!uid) return;

    const fetchNotifications = async () => {
      try {
        const notifRef = collection(db, 'notifications');
        const q = query(notifRef, where('userId', '==', uid), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);

        const results: Notification[] = [];
        querySnapshot.forEach(docSnap => {
          results.push({ id: docSnap.id, ...(docSnap.data() as Omit<Notification, 'id'>) });
        });

        setNotifications(results);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    if (notificationsVisible) {
      fetchNotifications();
    }
  }, [uid, notificationsVisible]);

  const handleRedirect = () => {
    router.push(`/profile?uid=${uid}`);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    router.push('/');
  };

  const toggleProfileMenu = () => {
    setProfileMenuVisible(!profileMenuVisible);
  };

  const toggleNotifications = () => {
    setNotificationsVisible(!notificationsVisible);
  };


  const auth = getAuth();
  const user = auth.currentUser;

  const handleClick = () => {
    if (user) {
      router.push(`/success?uid=${user.uid}`);
    } else {
      console.log("User not authenticated");
    }
  };

  return (
    <div className='flex justify-evenly items-center w-screen h-[60px] bg-white fixed top-0 z-[9999999999]'>
      <div className='flex justify-center items-center gap-3 max-sm:p-3'>
        <button onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="50" height="50" color='blue'>
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </button>
        <SearchUsers />
      </div>

      <div className='flex justify-between items-center gap-2 max-w-[600px] w-full text-gray-700 relative max-md:justify-evenly' >
       

        <div className='flex justify-between items-center max-w-[400px] w-full text-gray-700 cursor-pointer max-md:hidden'>
          <div className=' flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            <span className='text-[14px]'>Home</span>
          </div>

          <div className=' flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            <p className=' text-[14px]'>My Network</p>
          </div>

          <div className=' flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            <p className=' text-[14px]'>Jobs</p>
          </div>

          <div className=' flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
            </svg>
            <p>Messaging</p>
          </div>

        </div >
        <div onClick={toggleNotifications} className="cursor-pointer relative flex flex-col justify-center items-center" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
            <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
          </svg>
          <p>notifications</p>




          
          {notificationsVisible && (
            <div className="absolute top-[60px] right-0 bg-white border shadow-md w-[300px] max-h-[400px] overflow-y-auto z-[999999] p-3 rounded max-md:right-0 max-md:left-0">
              {notifications.length === 0 ? (
                <p className="text-sm text-gray-500">There are no notifications</p>
              ) : (
                notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    currentUserId={uid}
                  />
                ))
              )}
            </div>
          )}
        </div>

       
        <div>
          {userData ? (
            <div onClick={toggleProfileMenu}>
              <Avatar src={userData.avatar || "/avatar.png"} alt="avatar" size="w-[50px] h-[50px] mx-auto " />
              

              {profileMenuVisible && (
                <div className="absolute top-[60px] right-[-25%] bg-white shadow-md p-3 rounded-md max-w-[300px] flex flex-col w-full max-lg:right-5">
                  <h1 className=' text-black text-[16px]'>{userData.firstName} {userData.lastName}</h1>
                  <button onClick={handleRedirect} className="block py-1 px-3 text-blue-600 border-blue-700 border w-full rounded-full">View Profile</button>
                  <HeaderDefoltComponent />
                  <button onClick={handleLogout} className="block py-1  text-red-600 text-start">LogOut</button>

                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-500">No user found</p>
          )}
        </div>
        <div className=' flex gap-2 cursor-pointer max-sm:hidden '>
          <div className=' flex flex-col justify-center items-center'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
            <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
          </svg>
            <p >Business</p>
            </div>

          <div className=' flex flex-col justify-center items-center'>
          <div className='w-6 h-6 bg-gradient-to-b from-orange-500 via-orange-300 to-yellow-400'></div>
          <p>Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;




