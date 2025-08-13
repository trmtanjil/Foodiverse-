import React from 'react'

function Orderlist() {
  return (
    <div>
        <div className='bg-red-50  py-3 text-black'>
            <p className='font-bold text-2xl text-center'>ORDER LIST </p>
        </div>
        <div className='flex items-center justify-center text-black font-bold '>
            Your shopping cart is empty!
        </div>
    </div>
  )
}

export default Orderlist