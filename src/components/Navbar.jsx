import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='text-white flex'>
        
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
      <ul className='flex' id='nav'>
      <li className='p-4 '>Dashboard</li>
      <li className='p-4'>Events</li>
      <li className='p-4'>Organise</li>
      <li className='p-4'>Sponsership</li>
      <li className='p-4'>Reward</li>
        </ul>
    </div>
  )
}

export default Navbar
