import React from 'react'
import ButtomNav from './ButtomNav'
import MiddleNav from './MiddleNav'
import UpperNav from './UpperNav'

const Header = () => {
  return (
    <div className=' container'>
        <UpperNav/>
        <MiddleNav/>
        <ButtomNav/>
    </div>
  )
}

export default Header