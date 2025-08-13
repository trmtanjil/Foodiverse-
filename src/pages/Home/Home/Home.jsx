import React from 'react'
import Hero from '../hero/Hero'
import Poke from '../Poke/Poke'

function Home() {
  return (
    <div className='bg-gray-200 h-screen'>
      <Hero></Hero>
      <Poke></Poke>
    </div>
  )
}

export default Home