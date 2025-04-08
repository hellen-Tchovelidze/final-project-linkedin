

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Use `next/navigation` for routing in Next.js 13
import { registerWithEmail, signInWithGoogle } from '../../../../firebase/auth';
import InputField from '../../__atoms/InputField/InputField';
import ErrorMessage from '../../__atoms/ErrorMessage/ErrorMessage';
import RegisterButton from '../../__atoms/RegisterButton/RegisterButton';
import { useStore } from '../../../store/store';
import Image from 'next/image';

const RegisterComponent = () => {
  const { email, password, error, setError, clearError, setEmail, setPassword } = useStore();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // კლივენტური მხარე
  }, []);


  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push('/SuccessPage');
    } catch (error) {
      console.error('Error signing in with Google: ', error);
      setError('Google sign-in failed. Please try again.');
    }
  };

  const handleMicrosoftSignIn = async () => {
    try {
      router.push('/SuccessPage');
    } catch (error) {
      console.error('Error signing in with Microsoft: ', error);
    }
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password: string) => password.length >= 6;

  const handleRegister = async () => {
    clearError();

    
    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    
    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
    
      await registerWithEmail(email, password);
      router.push('/complete-profile'); 
    } catch (err: any) {
      console.error('Registration error: ', err); 
      if (err.code === 'auth/email-already-in-use') {
      
        console.log('Email already in use, redirecting to login...');
        router.push('/LoginPage');
      } else {
        setError('Registration failed. Please try again.'); 
      }
    }
  };

  return (
    <div className="bg-[#F4F2EE] h-screen flex justify-center items-center flex-col">
      <Image
        src="/linkdeinicone.png"
        alt="linkdeinicone"
        width={700}
        height={700}
        className="max-w-[150px] max-h-[150px] cursor-pointer"
      />
      <h1 className="text-[32px] max-sm:text-[18px]">Make the most of your professional life</h1>
      <div className="max-w-[400px] m-auto p-5 bg-white flex flex-col justify-between gap-2 max-sm:w-[300px]">
        <ErrorMessage message={error} />

        <div>
          <h1>Email</h1>
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <h1>Password</h1>
          <InputField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password (min 6 characters)"
          />
        </div>
        <div className="text-[12px] flex justify-center items-center mb-2">
          <h2>
            By clicking Agree & Join or Continue, you agree to the LinkedIn
            <span className="text-blue-600">User Agreement</span>,{' '}
            <span className="text-blue-600">Privacy Policy</span>, and{' '}
            <span className="text-blue-600">Cookie Policy</span>.
          </h2>
        </div>
        <RegisterButton onClick={handleRegister} />

        <div className="flex justify-center items-center gap-2">
          <div className="w-[40%] h-[1px] bg-slate-500"></div>
          <p>or</p>
          <div className="w-[40%] h-[1px] bg-slate-500"></div>
        </div>

        <div className="mb-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full py-3 bg-white text-black border border-black font-semibold rounded-[20px] hover:bg-gray-300 transition duration-200 flex items-center justify-center gap-1"
          >
            <div className="w-[24px] h-[24px] rounded-[100%] bg-white flex justify-center items-center">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 48 48"
                className="LgbsSe-Bz112c"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
            </div>
            Sign in with Google
          </button>
        </div>

        <div className="mb-4">
          <button
            onClick={handleMicrosoftSignIn}
            className="w-full py-3 border border-black text-black font-semibold rounded-[20px] shadow-md hover:bg-gray-300 transition duration-200 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.5 3H2v18h5.5V3zM2 0c-.55 0-1 .45-1 1v22c0 .55.45 1 1 1h5.5c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H2zM21 0h-5.5c-.55 0-1 .45-1 1v22c0 .55.45 1 1 1H21c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM16.5 3h-5.5v18h5.5V3z" />
            </svg>
            Sign in with Microsoft
          </button>
        </div>

        <h1 className="mr-auto ml-auto">Already on LinkedIn? Sign in</h1>
      </div>
    </div>
  );
};

export default RegisterComponent;
