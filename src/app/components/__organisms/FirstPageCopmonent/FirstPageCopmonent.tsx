import React from 'react'
import AuthComponent from '../authcomponent/authcomponent'
import Image from 'next/image'
import RegisterHeader from '../../__moleculos/RegisterHeader/RegisterHeader'

function Componneddd() {
  return (

    <div>
      <RegisterHeader />

      <div className=' flex w-screen justify-evenly items-center'>

        <AuthComponent />

        <Image
          src={"/singupImgae.svg"}
          alt="Copy Icon"
          width={700}
          height={700}
          className=' max-w-[700px] max-h-[500px]'
        />

      </div>
    </div>

  )
}

export default Componneddd