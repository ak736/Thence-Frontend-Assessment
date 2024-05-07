import React from 'react'
import union from '../images/union.png'
import Accordion from './Accordion'
const Faqs = () => {
  return (
    <div className='mt-12 h-[500px] mx-4 my-4 rounded-3xl bg-[#E8EEE7] flex flex-row space-x-60'>
      {/* Left */}
      <div className='flex flex-col space-y-2 w-[700px]'>
        <div className='flex flex-col items-left pt-8 pl-16 gap-2'>
          <p className='font-grace font-regular text-2xl text-[#9E9D9D]'>
            What’s on your mind{' '}
          </p>
          <p className='font-manrope font-semibold text-6xl'>Ask Questions</p>
        </div>
        <img src={union} className='h-[500px] w-[400px] pt-8 pr-4' alt='' />
      </div>
      {/* Right */}
      <div className='w-[1000px] px-8 py-8'>
        <Accordion
          title='Do you offer freelancers?'
          answer='Yes, our company does offer opportunities for freelancers.'
        />
        <div className='border-t-2 border-[#D7D7D7]'></div>
        <Accordion
          title='What’s the guarantee that I will be satisfied with the hired talent?'
          answer='We prioritize ensuring your satisfaction with the talent you hire. '
        />
        <div className='border-t-2 border-[#D7D7D7]'></div>
        <Accordion
          title='Can I hire multiple talents at once?'
          answer='If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement.'
        />
        <div className='border-t-2 border-[#D7D7D7]'></div>
        <Accordion
          title='Why should I not go to an agency directly?'
          answer='Our platform offers transparency and flexibility, enabling clear communication and easy collaboration throughout the project.'
        />
        <div className='border-t-2 border-[#D7D7D7]'></div>
        <Accordion
          title='Who can help me pick a right skillset and duration for me?'
          answer='Freelancers on our platform often have diverse skillsets and experience levels, allowing you to choose the individual best suited to your project needs'
        />
      </div>
    </div>
  )
}

export default Faqs
