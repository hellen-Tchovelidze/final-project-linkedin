

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { signInWithGoogle, registerWithEmail, loginWithEmail } from '../../../../firebase/auth';

const AuthComponent = () => {
  const router = useRouter();
  

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push('/');
    } catch (error) {
      console.error('Error signing in with Google: ', error);
    }
  };




  const handleMicrosoftSignIn = async () => {
    try {

      router.push('/login');
    } catch (error) {
      console.error('Error signing in with Microsoft: ', error);
    }
  };

  const handleJoinNow = () => {
    router.push('/register');
  };

  return (
    <div className="max-w-md  p-8  ">
    
      <div className="text-center mb-6">
        <h2 className="text-3xl text-[#526a6e] font-normal">Welcome to your professional community</h2>

      </div>

      
      <div className="mb-4">
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 gap-1 bg-blue-600 text-white font-semibold rounded-[20px] shadow-md hover:bg-blue-700 transition duration-200 flex items-center justify-center"
        >
          <div className=' w-[24px] h-[24px] rounded-[100%] bg-white flex justify-center items-center'>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" className="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>

          </div>
          Sign in with Google
        </button>
      </div>

   
      <div className="mb-4">
        <button
          onClick={handleMicrosoftSignIn}
          className="w-full py-3  border border-black text-black font-semibold rounded-[20px] shadow-md hover:bg-gray-300 transition duration-200 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.5 3H2v18h5.5V3zM2 0c-.55 0-1 .45-1 1v22c0 .55.45 1 1 1h5.5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H2zM21 0h-5.5c-.55 0-1 .45-1 1v22c0 .55.45 1 1 1H21c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM16.5 3h-5.5v18h5.5V3z" />
          </svg>
          Sign in with Microsoft
        </button>
      </div>




      <div className="">
        <button
          onClick={handleJoinNow}
          className="w-full py-3  text-black border border-black font-semibold rounded-[20px] shadow-md hover:bg-gray-300 transition duration-200 flex items-center justify-center"
        >
          Sign in with Email
        </button>
      </div>


      {/* <div className="mb-4 text-center">
        <p className="text-sm text-gray-500">
          By clicking "Continue to join or sign in", you agree to LinkedIn’s{' '}
          <a href="#" className="text-blue-600">User Agreement</a>,{' '}
          <a href="#" className="text-blue-600">Privacy Policy</a>, and{' '}
          <a href="#" className="text-blue-600">Cookie Policy</a>.
        </p>
      </div> */}

<div className="mb-4 text-center">
  <p className="text-sm text-gray-500">
    By clicking &quot;Continue to join or sign in&quot;, you agree to LinkedIn’s{' '}
    <a href="#" className="text-blue-600">User Agreement</a>,{' '}
    <a href="#" className="text-blue-600">Privacy Policy</a>, and{' '}
    <a href="#" className="text-blue-600">Cookie Policy</a>.
  </p>
</div>



      <div className="mt-6  flex gap-2 justify-center items-center">
        <span className=' text-black'> New to LinkedIn?</span>
        <button
          onClick={handleJoinNow}
          className="hover:text-[#004182]  text-[#0a66c2] transition  font-medium duration-200 hover:underline"
        >
          Join now
        </button>
      </div>
    </div>
  );
};

export default AuthComponent;
