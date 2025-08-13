import React from 'react'

function Poke() {
  return (
    <div>
      <div className="collapse collapse-arrow  text-black border border-base-300">
  <input type="checkbox" /> {/* checkbox হলে toggle হবে */}
  <div className="collapse-title font-semibold cursor-pointer">
     <p className='font-bold text-2xl'> CREATE POKE </p>
  </div>
  <div className="collapse-content text-sm">
    {/* fetffch data frome server  */}
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>

    </div>
  )
}

export default Poke