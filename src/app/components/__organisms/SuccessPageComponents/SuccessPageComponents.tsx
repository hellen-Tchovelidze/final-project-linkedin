

'use client';

// import { useSearchParams } from 'next/navigation';
// import UserSearch from '../../__moleculos/UserSearch/UserSearch';
// import Image from 'next/image'
// import Header from '@/app/components/__organisms/Header/Header';
// import Defolt from '@/app/components/__atoms/defolt/defolt';
// import Reclient from '@/app/components/__atoms/Reclient/Reclient';
// import FooterOnce from '@/app/components/__atoms/FooterOnce/FooterOnce';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { app, db } from "../../../../firebase/firebase-config";
// import { collection, getDocs, orderBy, query } from 'firebase/firestore';
// import AddPostModal from '@/app/components/__organisms/AddPostModal/AddPostModal';
// import PostCard from '@/app/components/__organisms/Post/Post';
// import DefoltComponent from '@/app/components/__moleculos/DefoltComponent/DefoltComponent';

// interface Post {
//   id: string;
//   caption: string;
//   imageURL: string;
//   uid: string;
//   username: string;
// }

// declare global {
//   interface Window {
//     openAddPost?: () => void;
//   }
// }

// export default function SuccessPage() {
//   const searchParams = useSearchParams();
//   const uid = searchParams.get('uid');
//   const router = useRouter();

//   const [loading, setLoading] = useState(true);
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [isAddPostOpen, setIsAddPostOpen] = useState(false);
//   const [currentUserId, setCurrentUserId] = useState<string | null>(null);

//   useEffect(() => {
//     const auth = getAuth(app);
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         router.push("/login");
//       } else {
//         setCurrentUserId(user.uid);
//       }
//     });

//     return () => unsubscribe();
//   }, [router]);

//   const loadPosts = async () => {
//     try {
//       const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
//       const snapshot = await getDocs(q);
//       const fetchedPosts: Post[] = snapshot.docs.map((doc) => ({
//         ...(doc.data() as Post),
//         id: doc.id,
//       }));
//       setPosts(fetchedPosts);
//     } catch (error) {
//       console.error("Error loading posts:", error);
//     } finally {
//       setLoading(false); 
//     }
//   };

//   useEffect(() => {
//     loadPosts();
//     window.openAddPost = () => setIsAddPostOpen(true);
//   }, []);

//   useEffect(() => {
//     if (!isAddPostOpen) loadPosts();
//   }, [isAddPostOpen]);

//   if (!uid) {
//     return <p className="text-red-500 text-center mt-10">❌ Iarmoidzebna</p>;
//   }

//   if (loading) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen gap-4 bg-[#F4F2EE]">
     
//         <Image
//     src={"/linkdeinicone.png"}
//     alt="Copy Icon"
//     width={700}
//     height={700}
//     className=' max-w-[200px] max-h-[200px]'
//   />
//        <div className="relative w-64 h-2 bg-gray-300 rounded overflow-hidden">
//     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-loading-bar"></div>
//   </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col justify-center items-center h-full bg-[#F4F2EE]">
//       <Header uid={uid} />

//       <div className='flex justify-evenly items-start gap-[3%] mt-[10%] max-md:mt-20'>
//         <div className='flex flex-col gap-3 max-md:hidden'>
//           <UserSearch uid={uid} />
//           <DefoltComponent />
//         </div>

//         <div className='flex flex-col gap-7'>
//           <div className='bg-white h-[120px] flex justify-between items-center flex-col p-5 gap-4'>
            
//             <button onClick={() => setIsAddPostOpen(true)} className="bg-white text-black text-start px-4 py-2 border-[#2d2d2ceb4] border w-full rounded-full h-[60px]">
//               Start Post
//             </button>
//             <div className='flex justify-between w-full cursor-pointer'>
//               <h1>📷Media</h1>
//               <h1>📅Event</h1>
//               <h1>📰Write article</h1>
//             </div>
//           </div>

//           <div className="w-full min-h-screen flex flex-col items-center pt-4 text-white">
//             {isAddPostOpen && (
//               <AddPostModal onClose={() => setIsAddPostOpen(false)} />
//             )}

//             <div className="w-full max-w-md px-4 mt-6 space-y-6">
//               {posts.map((post) => (
//                 <PostCard key={post.id} post={post} />
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className='flex flex-col justify-between gap-4 max-md:hidden'>
//           <Defolt />
//           <Reclient />
//           <FooterOnce />
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useSearchParams } from 'next/navigation';
import UserSearch from '../../__moleculos/UserSearch/UserSearch';
import Image from 'next/image'
import Header from '@/app/components/__organisms/Header/Header';
import Defolt from '@/app/components/__atoms/defolt/defolt';
import Reclient from '@/app/components/__atoms/Reclient/Reclient';
import FooterOnce from '@/app/components/__atoms/FooterOnce/FooterOnce';
import { useState, useEffect, Suspense } from 'react'; 
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app, db } from "../../../../firebase/firebase-config";
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import AddPostModal from '@/app/components/__organisms/AddPostModal/AddPostModal';
import PostCard from '@/app/components/__organisms/Post/Post';
import DefoltComponent from '@/app/components/__moleculos/DefoltComponent/DefoltComponent';

interface Post {
  id: string;
  caption: string;
  imageURL: string;
  uid: string;
  username: string;
}

declare global {
  interface Window {
    openAddPost?: () => void;
  }
}

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const uid = searchParams.get('uid');
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isAddPostOpen, setIsAddPostOpen] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        setCurrentUserId(user.uid);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const loadPosts = async () => {
    try {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const fetchedPosts: Post[] = snapshot.docs.map((doc) => ({
        ...(doc.data() as Post),
        id: doc.id,
      }));
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    loadPosts();
    window.openAddPost = () => setIsAddPostOpen(true);
  }, []);

  useEffect(() => {
    if (!isAddPostOpen) loadPosts();
  }, [isAddPostOpen]);

  if (!uid) {
    return <p className="text-red-500 text-center mt-10">❌ Iarmoidzebna</p>;
  }

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
    <div className="flex flex-col justify-center items-center h-full bg-[#F4F2EE]">
      <Header uid={uid} />

      <div className='flex justify-evenly items-start gap-[3%] mt-[10%] max-md:mt-20'>
        <div className='flex flex-col gap-3 max-md:hidden'>
          <UserSearch uid={uid} />
          <DefoltComponent />
        </div>

        <div className='flex flex-col gap-7'>
          <div className='bg-white h-[120px] flex justify-between items-center flex-col p-5 gap-4'>
            <button onClick={() => setIsAddPostOpen(true)} className="bg-white text-black text-start px-4 py-2 border-[#2d2d2ceb4] border w-full rounded-full h-[60px]">
              Start Post
            </button>
            <div className='flex justify-between w-full cursor-pointer'>
              <h1>📷Media</h1>
              <h1>📅Event</h1>
              <h1>📰Write article</h1>
            </div>
          </div>

          <div className="w-full min-h-screen flex flex-col items-center pt-4 text-white">
            {isAddPostOpen && (
              <AddPostModal onClose={() => setIsAddPostOpen(false)} />
            )}

            <Suspense fallback={<div>Loading posts...</div>}>
              <div className="w-full max-w-md px-4 mt-6 space-y-6">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </Suspense>
          </div>
        </div>

        <div className='flex flex-col justify-between gap-4 max-md:hidden'>
          <Defolt />
          <Reclient />
          <FooterOnce />
        </div>
      </div>
    </div>
  );
}
