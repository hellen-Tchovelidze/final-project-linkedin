"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginButton() {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true); // კლივენტური მხარე
    }, []);
  

    return (
       <div>
         <button 
            className=" hover:text-[#004182]  text-[#0a66c2] transition   border border-blue-500 rounded-[30px] w-[90px] h-[50px] font-medium duration-200 hover:underline "
            onClick={() => router.push("/LoginPage")}
        >
            Sign In
        </button>
       </div>
    );
}
