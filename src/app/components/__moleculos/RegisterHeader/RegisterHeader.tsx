'use client'


import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import LoginButton from '../../__atoms/LoginButton/LoginButton';
function RegisterHeader() {


    const router = useRouter();

    const handleJoinNow = () => {
        router.push('/register');
    };
    return (
        <>
            <div className=' flex justify-around w-screen p-3 pb-[4%] items-center '>

                <div>

                    <Image
                        src={"/linkdeinicone.png"}
                        alt="linkdeinicone"
                        width={700}
                        height={700}
                        className=' max-w-[150px] max-h-[150px] cursor-pointer '
                    />

                </div>
<div className=' flex w-[50%] justify-center items-center'>
    
<div className=' flex justify-evenly w-[50%] items-center text-gray-600 cursor-pointer max-lg:hidden'>
                    <div className='articles flex justify-center items-center flex-col'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 20 17" focusable="false" className="lazy-loaded" aria-busy="false">
                            <path d="m11 9.5h5v1h-5v-1zm5-5h-12v3h12v-3zm-5 8h5v-1h-5v1zm9-12v13c0 1.657-1.343 3-3 3h-14c-1.657 0-3-1.343-3-3v-13h20zm-2 2h-16v11c0 0.552 0.449 1 1 1h14c0.551 0 1-0.448 1-1v-11zm-9 7h-5v3h5v-3z" fill="currentColor" fillOpacity=".9"></path>
                        </svg>
                        <p>Articles</p>
                    </div>
                    <div className='people  flex justify-center items-center flex-col'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" focusable="false" className="lazy-loaded" aria-busy="false">
                            <path d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z" fill="currentColor"></path>
                        </svg>
                        <p>People</p>
                    </div>

                    <div className='learning  flex justify-center items-center flex-col'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" focusable="false" className="lazy-loaded" aria-busy="false">
                            <path fillRule="evenodd" clipRule="evenodd" d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z" fill="currentColor" fillOpacity=".25"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z" fill="currentColor" fillOpacity=".6"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z" fill="currentColor"></path>
                        </svg>
                        <p>Learning</p>
                    </div>

                    <div className=' jobs  flex justify-center items-center flex-col'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none" focusable="false" className="lazy-loaded" aria-busy="false">
                            <path d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z" fill="currentColor"></path>
                        </svg>
                        <p>Jobs</p>
                    </div>

                    <div className=' games  flex justify-center items-center flex-col'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" focusable="false" className="lazy-loaded" aria-busy="false">
                            <path d="M12.3446 11.8441C12.718 11.4706 13.2378 11.2385 13.8081 11.2385C14.7569 11.2385 15.5543 11.8744 15.8015 12.7424C15.9328 13.2117 16.2305 13.6155 16.6191 13.8829L20.5 10.002L16.6191 6.12114L16.6797 6.03534C16.9471 5.68712 17.3256 5.42469 17.7597 5.30357C18.6277 5.05629 19.2636 4.25891 19.2636 3.31013C19.2636 2.73986 19.0314 2.22005 18.658 1.8466C18.2845 1.47314 17.7647 1.241 17.1944 1.241C16.2456 1.241 15.4483 1.87688 15.201 2.74491C15.0799 3.17892 14.8174 3.55742 14.4692 3.8249L14.3834 3.88546L10.4975 -0.000488281L6.61658 3.88041C6.8891 4.27405 7.28779 4.56676 7.75713 4.70302C8.62516 4.95031 9.26104 5.74768 9.26104 6.69646C9.26104 7.26673 9.02889 7.78654 8.65544 8.16C8.28198 8.53345 7.76218 8.7656 7.1919 8.7656C6.24312 8.7656 5.44575 8.12971 5.19846 7.26169C5.06725 6.79234 4.76949 6.38861 4.3809 6.12114L0.5 9.99699L4.3809 13.8779L4.32034 13.9637C4.05286 14.3119 3.67436 14.5743 3.24035 14.6954C2.37232 14.9427 1.73644 15.7401 1.73644 16.6889C1.73644 17.2592 1.96858 17.779 2.34204 18.1524C2.71549 18.5259 3.2353 18.758 3.80558 18.758C4.75435 18.758 5.55173 18.1221 5.79902 17.2541C5.92014 16.8201 6.18256 16.4416 6.53078 16.1741L6.61658 16.1136L10.4975 19.9945L14.3784 16.1136C14.1059 15.7199 13.7072 15.4272 13.2378 15.291C12.3698 15.0437 11.7339 14.2463 11.7339 13.2975C11.7339 12.7272 11.9661 12.2074 12.3395 11.834L12.3446 11.8441Z" fill="currentColor" fillOpacity=".9"></path>
                        </svg>
                        <p>Games</p>
                    </div>

                    <div className=' h-12 w-[1px] bg-gray-500'></div>

                    <div className='app  flex justify-center items-center flex-col'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="laptop-medium" data-supported-dps="24x24" fill="currentColor" focusable="false" className="lazy-loaded" aria-busy="false">
                            <path d="M21 17V8c0-1.66-1.34-3-3-3H6C4.34 5 3 6.34 3 8v9H1v1c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-1h-2zM11 6h2v1h-2V6zm8 11h-5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1H5V9c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8z"></path>
                        </svg>
                        <p>Get the app</p>
                    </div>

                    <div className=' h-12 w-[1px] bg-black'></div>

                    

                </div>
                <div className=' flex justify-center items-center gap-4'>
                <button
                        onClick={handleJoinNow}
                        className="hover:text-[#004182] text-[#0a66c2] transition font-medium duration-200 hover:underline"
                    >
                        Join now
                    </button>
                    <LoginButton />
                </div>

</div>
            </div>
        </>
    )
}

export default RegisterHeader