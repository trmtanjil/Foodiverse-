import React from 'react'
import { Outlet } from 'react-router'

function AdminLayout() {
  return (
    <div className='grid grid-cols-6 h-screen'>

      <div className='col-span-2 w-full bg-fuchsia-300'>
    adfsdfasdfasdf
      </div>
       <div className='col-span-4 w-full bg-amber-50'>
         <Outlet></Outlet>
       </div>
    </div>
  )
}

export default AdminLayout