// 'use client'
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import StudentStatus from './StudentStatus';
// import WorkDetails from './WorkDetails';
// import { useStore } from '../store/store';
// import Image from 'next/image'

// const WorkExperience = () => {
//   const { isStudent, experience, position, employmentType, user  } = useStore();
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Work Experience:', experience);
//     console.log('Is Student:', isStudent);
//     console.log('Position:', position);
//     console.log('Employment Type:', employmentType);
//     if (user && user.uid) {
//       router.push(`/success?uid=${user.uid}`);
//     } else {
//       console.error("User is undefined or UID is missing");
//     }
//   };

//   return (
//     <div className=' bg-[#F4F2EE] h-screen flex justify-center items-center flex-col'>

//       <Image
//         src={"/linkdeinicone.png"}
//         alt="linkdeinicone"
//         width={700}
//         height={700}
//         className=' max-w-[150px] max-h-[150px] cursor-pointer'
//       />

//       <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
//       <div className="w-[400px] mx-auto p-6 bg-white shadow-md rounded-lg mt-6">

//         <form onSubmit={handleSubmit}>
//           <StudentStatus />
//           {!isStudent && <WorkDetails />}
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default WorkExperience;




// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { auth } from '../../firebase/firebase-config';
// import { updateUserLocation } from '../../firebase/auth';
// import LocationInput from '../components/LocationInput';
// import ErrorMessage from './ErrorMessage';
// import SaveButton from './SaveButton';
// import Image from 'next/image';
// import { useStore } from '../store/store';

// const WorkExperience = () => {
//   const { isStudent, position, employmentType, experience } = useStore();
//   const [location, setLocation] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     // Check if the user is logged in
//     const user = auth.currentUser;
//     if (!user) {
//       setError('User is not logged in');
//       router.push('/login'); // Redirect to login page if user is not logged in
//     }
//   }, [router]);

//   const handleLocationUpdate = async () => {
//     try {
//       const user = auth.currentUser;
//       if (user && user.uid) {
//         await updateUserLocation(location); // Update location in Firestore
//         console.log('Location updated:', location);
//         router.push('/work-experience'); // Redirect to work-experience page after success
//       } else {
//         setError('No user is logged in');
//       }
//     } catch (err) {
//       setError('Location update failed. Please try again.');
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Work Experience:', experience);
//     console.log('Is Student:', isStudent);
//     console.log('Position:', position);
//     console.log('Employment Type:', employmentType);

//     const user = auth.currentUser;
//     if (user && user.uid) {
//       router.push(`/success?uid=${user.uid}`);
//     } else {
//       setError('User is undefined or UID is missing');
//     }
//   };

//   return (
//     <div className='bg-[#F4F2EE] h-screen flex justify-center items-center flex-col'>
//       <Image
//         src={"/linkdeinicone.png"}
//         alt="LinkedIn Icon"
//         width={700}
//         height={700}
//         className="max-w-[150px] max-h-[150px] cursor-pointer"
//       />
//       <h1 className='text-[32px] mb-5'>Complete Your Location</h1>
//       <div className='bg-white w-[400px] m-auto p-5 flex justify-center gap-3 flex-col'>
//         {error && <ErrorMessage message={error} />}
//         <LocationInput value={location} onChange={(e) => setLocation(e.target.value)} />
//         <SaveButton onClick={handleLocationUpdate} />
//       </div>
//       <div className="w-[400px] mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
//         <form onSubmit={handleSubmit}>
//           <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
//           {!isStudent && (
//             <>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Position</label>
//                 <input
//                   type="text"
//                   value={position || ''}
//                   onChange={(e) => console.log('Position:', e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700">Employment Type</label>
//                 <input
//                   type="text"
//                   value={employmentType || ''}
//                   onChange={(e) => console.log('Employment Type:', e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//             </>
//           )}
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default WorkExperience;



// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { auth } from '../../firebase/firebase-config';
// import { updateUserLocation } from '../../firebase/auth';
// import LocationInput from '../components/LocationInput';
// import ErrorMessage from './ErrorMessage';
// import SaveButton from './SaveButton';
// import Image from 'next/image';
// import { useStore } from '../store/store';

// const WorkExperience = () => {
//   const { isStudent, position, employmentType, experience } = useStore();
//   const [location, setLocation] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     // Check if the user is logged in
//     const user = auth.currentUser;
//     if (!user) {
//       setError('User is not logged in');
//       router.push('/login'); // Redirect to login page if user is not logged in
//     }
//   }, [router]);

//   const handleLocationUpdate = async () => {
//     try {
//       const user = auth.currentUser;
//       if (user && user.uid) {
//         await updateUserLocation(location); // Update location in Firestore
//         console.log('Location updated:', location);
//         router.push('/work-experience'); // Redirect to work-experience page after success
//       } else {
//         setError('No user is logged in');
//       }
//     } catch (err) {
//       setError('Location update failed. Please try again.');
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Work Experience:', experience);
//     console.log('Is Student:', isStudent);
//     console.log('Position:', position);
//     console.log('Employment Type:', employmentType);

//     const user = auth.currentUser;
//     if (user && user.uid) {
//       router.push(`/success?uid=${user.uid}`);
//     } else {
//       setError('User is undefined or UID is missing');
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen flex justify-center items-center p-6">
//       <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8">
//         <Image
//           src="/linkdeinicone.png"
//           alt="LinkedIn Icon"
//           width={150}
//           height={150}
//           className="mx-auto mb-4 cursor-pointer"
//         />
//         <h1 className="text-3xl font-bold text-center mb-6">Complete Your Location</h1>
//         {error && <ErrorMessage message={error} />}
//         <div className="space-y-4">
//           <LocationInput value={location} onChange={(e) => setLocation(e.target.value)} />
//           <SaveButton onClick={handleLocationUpdate} />
//         </div>
//         <div className="mt-8">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <h2 className="text-xl font-semibold text-center mb-4">Work Experience</h2>
//             {!isStudent && (
//               <>
//                 <div className="space-y-2">
//                   <label className="block text-gray-700">Position</label>
//                   <input
//                     type="text"
//                     value={position || ''}
//                     onChange={(e) => console.log('Position:', e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     placeholder="Enter your position"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="block text-gray-700">Employment Type</label>
//                   <input
//                     type="text"
//                     value={employmentType || ''}
//                     onChange={(e) => console.log('Employment Type:', e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     placeholder="Enter employment type"
//                   />
//                 </div>
//               </>
//             )}
//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkExperience;


// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { auth } from '../../firebase/firebase-config';
// import { updateUserLocation } from '../../firebase/auth';
// import LocationInput from '../components/LocationInput';
// import ErrorMessage from './ErrorMessage';
// import SaveButton from './SaveButton';
// import Image from 'next/image';

// const LocationComponents = () => {
//   const [location, setLocation] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     // Check if the user is logged in
//     const user = auth.currentUser;
//     if (!user) {
//       setError('User is not logged in');
//       router.push('/login'); // Redirect to login page if user is not logged in
//     }
//   }, [router]);

//   const handleLocationUpdate = async () => {
//     try {
//       const user = auth.currentUser;
//       if (user && user.uid) {
//         await updateUserLocation(user.uid, location); // Update location in Firestore
//         console.log('Location updated:', location);
//         router.push('/work-experience'); // Redirect after success
//       } else {
//         setError('No user is logged in');
//       }
//     } catch (err) {
//       setError('Location update failed. Please try again.');
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen flex justify-center items-center p-6">
//       <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8">
//         <Image
//           src="/linkdeinicone.png"
//           alt="LinkedIn Icon"
//           width={150}
//           height={150}
//           className="mx-auto mb-4 cursor-pointer"
//         />
//         <h1 className="text-3xl font-bold text-center mb-6">Complete Your Location</h1>
//         {error && <ErrorMessage message={error} />}
//         <div className="space-y-4">
//           <LocationInput value={location} onChange={(e) => setLocation(e.target.value)} />
//           <SaveButton onClick={handleLocationUpdate} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocationComponents;
