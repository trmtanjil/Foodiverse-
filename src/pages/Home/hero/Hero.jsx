import React from 'react'

function Hero() {
  return (
    <div className='relative   '>
        <img className='h-[200px] rounded-bl-3xl w-full object-cover object-center opacity-80' src="	https://d1td59xojrmz1j.cloudfront.net/ba56adb0-c0d7-44c1-b52f-1c6382cf40a3_cover.webp" alt="" />
        <div className='absolute inset-0 flex  top-[70%] justify-center text-gray-700 text-2xl font-bold'>

        <img className='h-[20px] rounded-2xl ' src="	https://d1td59xojrmz1j.cloudfront.net/ba56adb0-c0d7-44c1-b52f-1c6382cf40a3_cover.webp" alt="" />
        
        <p className='text-white font-bold'>foodVerse</p>
        </div>
    </div>
  )
}

export default Hero