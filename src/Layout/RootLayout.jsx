import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Componets/Navbar'

function RootLayout() {
  return (
    <div>
        <Navbar></Navbar>

        <div className='grid grid-cols-6    p-4'>
            <div className='col-span-4 w-full'>
                <Outlet></Outlet>
            </div>
            <div className='col-span-2 w-full bg-amber-50 h-screen'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, magni a?
            </div>
        </div>
    </div>
  )
}

export default RootLayout