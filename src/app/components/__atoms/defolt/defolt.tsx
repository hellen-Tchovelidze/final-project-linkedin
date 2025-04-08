import React from 'react'

import Image from 'next/image'

function Defolt() {
  return (
    <div>
<div className=' bg-white w-[300px] h-auto p-5 rounded-lg'> 
<h1>Today’s puzzle games</h1>
<div className=' flex justify-between items-center'>
<Image
    src={"/sponsor.svg"}
    alt="Copy Icon"
    width={700}
    height={700}
    className=' max-w-[40px] max-h-[40px]'
  />
    <div>
        <h1>ZIP</h1>
        <p>Complate the path</p>
    </div>
    <h1 className=' text-[50px]'> » </h1>
</div>
<div  className=' flex justify-between items-center'>
<Image
    src={"/Tango.svg"}
    alt="Copy Icon"
    width={700}
    height={700}
    className=' max-w-[40px] max-h-[40px]'
  />
    <div>
        <h1>Tango</h1>
    <p>Harmonaiz the grid</p>
    </div>
    <h1 className=' text-[50px]'> » </h1>
</div>

  <div className=' flex justify-between items-center' >
  <Image
    src={"/Queens.svg"}
    alt="Copy Icon"
    width={700}
    height={700}
    className=' max-w-[40px] max-h-[40px]'
  />
    <div>
        <h1> Queens</h1>
        <p>Crown each region</p>
    </div>
    <h1 className=' text-[50px]'> » </h1>
  </div>

    <h1 className=' cursor-pointer'>Show more</h1>
</div>




    </div>
  )
}

export default Defolt