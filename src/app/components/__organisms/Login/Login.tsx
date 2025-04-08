


"use client";

import { useAuthStore } from "../../../store/store";
import { signUp, signInWithGoogle } from "../../../../firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const { email, password, error, setEmail, setPassword, setError } = useAuthStore();
  const router = useRouter();

  const handleJoinNow = () => {
    router.push("/register");
  };

  const handleLogin = async () => {
    setError(null);
    try {
      const user = await signUp(email, password);
      router.push(`/success?uid=${user.uid}`);
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        console.log("Google login successful:", user);
        router.push("/SuccessPage");
      } else {
        setError("Google sign-in failed.");
      }
    } catch (error) {
      setError("Error logging in with Google.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F4F2EE] flex-col gap-6">
      <Image
        src={"/linkdeinicone.png"}
        alt="LinkedIn Icon"
        width={700}
        height={700}
        className="max-w-[150px] max-h-[150px] cursor-pointer"
      />
      <h2 className="text-2xl font-bold">Welcome Back</h2>
      <p className="text-gray-500">
        Don’t miss your next opportunity. Sign in to stay updated on your professional world.
      </p>

      <div className="flex flex-col items-center gap-4 p-6 max-w-[400px] bg-white shadow-lg rounded-lg">

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-64"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded w-64"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        {error && <p className="text-red-500">{error}</p>}


        <button
          className="rounded-[30px] w-full p-[10px] bg-[#0a66c2] text-white font-semibold cursor-pointer transition duration-200 hover:bg-[#004182]"
          onClick={handleLogin}
        >
          Login
        </button>


        <button
          className="rounded-[30px] w-full p-[10px] bg-white border border-gray-400 text-gray-700 font-semibold cursor-pointer transition duration-200 hover:bg-gray-100 flex items-center justify-center gap-2"
          onClick={handleGoogleLogin}
        >
          <div className=' w-[24px] h-[24px] rounded-[100%] bg-white flex justify-center items-center'>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" className="LgbsSe-Bz112c">
              <g>
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </g>
            </svg>
          </div>
          Sign in with Google
        </button>


        <div className="flex justify-center items-center gap-2">
          <h1>New to LinkedIn?</h1>
          <button
            onClick={handleJoinNow}
            className="hover:text-[#004182] text-[#0a66c2] transition font-medium duration-200 hover:underline"
          >
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}
