import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FormDetails = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'username') {
      setUsername(value)
    } else if (name === 'email') {
      setEmail(value)
    }
    setIsValid(username.trim() !== '' && email.trim() !== '')
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
      </div>
      <Link to='/form-success'>
      <button
        type='submit'
        className={`rounded-full border border-[#EFEFEF] bg-[#000000] w-96 py-4 px-4 text-center text-white font-medium disabled:bg-[#C9C9C9] disabled:cursor-not-allowed ${
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

