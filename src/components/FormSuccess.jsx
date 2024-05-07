import React from 'react'
import logo from '../logos/Logo.svg'


const FormSuccess = () => {
  return (
    <>
      {/* Form Navbar  Component */}
      <div className='my-6 mx-6 flex justify-between items-center'>
        <div className='my-6 mx-6 pl-6'>
          <img src={logo} alt='Brunel Logo' />
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
      </div>
    </>
  )
}

export default FormSuccess
