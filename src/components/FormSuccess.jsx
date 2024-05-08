import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../logos/Logo.svg'
import greentick from '../images/greentick.png'

const FormSuccess = () => {
  const navigate = useNavigate()
  const [secondsRemaining, setSecondsRemaining] = useState(5)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1)
      } else {
        clearInterval(intervalId)
        navigate('/')
      }
    }, 1000) // Update every second

    return () => clearInterval(intervalId)
  })
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
        <div className='mt-14'>
          <img src={greentick} className='w-[50px] h-[50px]' alt='' />
        </div>
        <div className='font-grace text-green-500 text-[36px] mt-8'>
          Success Submitted
        </div>
        <div className='font-manrope text-[56px] text-wrap w-full max-w-[600px] text-center'>
          Congratulations
        </div>
        <div className='font-manrope font-medium text-3xl mt-4 text-[#727272] w-[800px] text-center'>
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </div>
        <div className='font-manrope font-light text-base mt-40 text-[#727272] w-[800px] text-center'>
          Redirecting you to Homepage in{' '}
          <span className='text-black font-manrope font-bold'>
            {secondsRemaining} Seconds
          </span>
        </div>
      </div>
    </>
  )
}

export default FormSuccess
