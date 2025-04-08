import React from 'react'
import AuthComponent from '../authcomponent/authcomponent'
import Image from 'next/image'
import RegisterHeader from '../../__moleculos/RegisterHeader/RegisterHeader'

function Componneddd() {
  return (

    <div>
      <RegisterHeader />

      <div className=' flex w-screen justify-evenly items-center max-lg:flex-col'>

        <AuthComponent />

        <Image
          src={"/singupImgae.svg"}
          alt="Copy Icon"
          width={700}
          height={700}
          className=' max-w-[700px] max-h-[500px] max-lg:w-[300px] max-sm:w-[200px]'
        />

      </div>
    </div>

  )
}

export default Componneddd