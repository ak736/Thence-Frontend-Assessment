import React from 'react'
import logo from '../logos/Logo.svg'
import { Link } from 'react-router-dom'
import FormDetails from './FormDetails'

const Form = () => {
  return (
    <>
      {/* Form Navbar  Component */}
      <div className='my-6 mx-6 flex justify-between items-center'>
        <div className='my-6 mx-6 pl-6'>
          <img src={logo} alt='Brunel Logo' />
        </div>
        <div className='my-4 mx-4 flex space-x-4'>
          <Link
            to='/'
            type='button'
            class='border-[#CACACA] border-2 rounded-full p-2 inline-flex items-center justify-center text-black '
          >
            <svg
              class='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </Link>
        </div>
      </div>
      {/* Form Hero Element */}
      <div className='flex flex-col items-center pt-8'>
        <div className='font-grace text-green-500 text-[36px]'>
          Registration Form
        </div>
        <div className='font-manrope text-[56px] text-wrap w-full max-w-[600px] text-center'>
          Start your success Journey here!
        </div>
        <div className='mt-12'>
          <FormDetails />
        </div>
      </div>
    </>
  )
}

export default Form
