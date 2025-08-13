import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Componets/Navbar'
import Orderlist from '../pages/Home/Orderlist/Orderlist'

function RootLayout() {
  return (
    <div>
        <Navbar></Navbar>

        <div className='grid grid-cols-6    p-4'>
            <div className='col-span-4 w-full'>
                <Outlet></Outlet>
            </div>
            <div className='col-span-2 w-full bg-white h-screen'>
              <Orderlist></Orderlist>
            </div>
        </div>
    </div>
  )
}

export default RootLayout