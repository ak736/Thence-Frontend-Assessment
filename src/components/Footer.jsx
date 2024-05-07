import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='rounded-full border-2 w-auto h-[100px] border-[#F5F5F5] bg-[#F5F5F5] mx-5 my-8 px-8 justify-between flex flex-row items-center'>
      <div className='font-manrope font-medium flex flex-row space-x-2 justify-between items-center'>
        <div>&copy; Aniket {currentYear}. All rights reserved</div>
      </div>
      <div className='font-manrope flex flex-row space-x-8 underline text-[#1C1C1C]'>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
