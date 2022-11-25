import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
const UpperNav = () => {
  return (
    <div className=' container  flex items-center justify-between py-4 border-b-2'>
        <div>
             <h1 className=' text-3xl font-bold'>shop<span className=' text-textSecondary font-medium'>cart</span> </h1>
        </div>
        <div className=' flex items-center gap-2'>
            <FaUserCircle/>
            <p>Sign In</p>
        </div>
       
    </div>
  )
}

export default UpperNav