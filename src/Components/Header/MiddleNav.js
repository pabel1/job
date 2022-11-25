import React from 'react'
import {BiMap,BiSearch} from 'react-icons/bi'
const MiddleNav = () => {
  return (
    <div className=' flex item-center justify-between py-5   flex-wrap gap-3'>
        <div className=' flex items-center gap-2 bg-primary rounded-xl px-2 py-3'>
            <BiMap/>
            <h2>Dhaka, 1212</h2>
        </div>
        <div className=' flex  items-center  border px-3 rounded-xl'>
            <input className=' basis-[90%' type="text"  placeholder=' search'/>
            <BiSearch/>
        </div>
    </div>
  )
}

export default MiddleNav