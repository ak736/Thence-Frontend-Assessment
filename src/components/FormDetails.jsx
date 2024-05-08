import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import frame from '../images/frame.png'
const FormDetails = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')


  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'username') {
      setUsername(value)
    } else if (name === 'email') {
      setEmail(value)
    }
    setIsValid(username.trim() !== '' && email.trim() !== '')

    if (name === 'email') {
      const isValidEmail = value.trim() !== '' && validateEmail(value)
      setErrorMessage(isValidEmail ? '' : <span className='flex flex-row justify-start items-center font-manrope text-[#FF0808] space-y-2 mt-4'> <img src={frame} className='h-[15px] w-[15px] mr-2' alt="" /> Enter a valid email address</span>)
    }
  }

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
  return (
    <form className='flex flex-col space-y-8'>
      <div className='flex flex-col'>
        <input
          type='text'
          id='username'
          name='username'
          className='rounded-full border border-[#EFEFEF] w-96 bg-[#EFEFEF] font-manrope text-[#827A7A] px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black'
          placeholder='Enter your name'
          value={username}
          onChange={handleChange}
        />
      </div>

      <div className='flex flex-col'>
        <input
          type='email'
          id='email'
          name='email'
          className='rounded-full border border-[#EFEFEF] w-96 bg-[#EFEFEF] font-manrope text-[#827A7A] px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black'
          placeholder='Enter your email'
          value={email}
          onChange={handleChange}
        />
        {errorMessage && <div className='text-red-500'>{errorMessage}</div>}
      </div>
      <Link to='/form-success'>
        <button
          type='submit'
          className={`rounded-full border border-[#EFEFEF] bg-[#000000] w-96 py-4 px-4 text-center text-white font-medium disabled:bg-[#C9C9C9] disabled:cursor-not-allowed hover:bg-[#4E4E4E] hover:border-[#4E4E4E] ${
            isValid ? '' : 'disabled'
          }`}
          disabled={!isValid} // Disable button if username or email is empty
        >
          Submit
        </button>
      </Link>
    </form>
  )
}

export default FormDetails
