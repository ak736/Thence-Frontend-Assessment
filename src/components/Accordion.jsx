import React, { useState } from 'react'

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return (
    <div className='py-2 text-2xl text-left'>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex justify-between w-full'
      >
        <span className='flex text-left font-manrope font-semibold'>{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}

        <svg
          className='fill-black shrink-0 mt-2'
          width='16'
          height='16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#617275]0 text-sm ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className='overflow-hidden font-manrope font-light text-[#617275] text-sm pt-2 mr-4'>{answer}</div>
        
      </div>
      
    </div>
  )
}

export default Accordion
