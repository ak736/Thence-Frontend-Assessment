import React from 'react'
import logo from '../logos/Logo.svg'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='rounded-full border-2 border-gray-200 my-6 mx-6 flex justify-between items-center'>
      <div className='my-6 mx-6 pl-6'>
        <img src={logo} alt='Brunel Logo' />
      </div>

      <div className='my-4 mx-4 flex space-x-4'>
        <Link
          to='/form'
          className='rounded-full border-2 border-gray-200 px-6 py-4 font-manrope'
        >
          Get Projects
        </Link>

        <button className='rounded-full border-2 border-black px-6 py-4 bg-black text-white font-manrope'>
          Onboard Talent
        </button>
      </div>
    </div>
  )
}

export default Navbar
