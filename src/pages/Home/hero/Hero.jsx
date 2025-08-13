import React from 'react'

function Hero() {
  return (
  <div className='relative'>
  <img 
    className='h-[200px] rounded-bl-3xl w-full object-cover object-center' 
    src="https://d1td59xojrmz1j.cloudfront.net/ba56adb0-c0d7-44c1-b52f-1c6382cf40a3_cover.webp" 
    alt="" 
  />

  {/* Black overlay */}
  <div className='absolute inset-0 bg-black opacity-30 rounded-bl-3xl'></div>

  <div className=' mx-auto    absolute inset-0 md:flex top-[60%] justify-center items-center space-x-2 text-2xl font-bold'>
    <div>
            <img className='h-[40px] rounded-2xl' src="https://d1td59xojrmz1j.cloudfront.net/ba56adb0-c0d7-44c1-b52f-1c6382cf40a3_cover.webp" alt="" />
    </div>
    <p className='text-white font-bold'>foodVerse</p>
  </div>
</div>

  )
}

export default Hero