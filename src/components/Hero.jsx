import React from 'react'
import banner from '../images/banner1.png'
import sparkle from '../images/sparkle.png'
import vector from '../images/vector.png'
import arrow from '../images/arrow.png'

const Hero = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='font-grace text-green-500 text-[36px]'>
          Success Stories
        </div>
        <div className='font-manrope text-[56px] text-wrap w-full max-w-[600px] text-center'>
          Every success journey we’ve encountered.
        </div>
      </div>
      <div className='flex justify-evenly space-x-32 mt-12'>
        {/* Left Div */}
        <div className='relative'>
          <img
            src={banner}
            className='w-[350px] h-[350px] rounded-3xl object-cover'
            alt='Banner 1'
          />
          {/* 40% Div */}
          <div className='absolute top-20 rounded-3xl left-[-70px] w-[160px] h-[150px] bg-white drop-shadow-md'>
            <div className='w-20 text-4xl font-semibold pl-[20px] absolute top-[40px] left-[40px] transform -translate-y-1/2 -translate-x-1/2 font-switzer'>
              40%
            </div>
            <div className='absolute top-[60px] w-[140px] h-[80px] overflow-hidden font-manrope font-medium ml-2 pt-2 pb-2 pl-2 text-xs text-[#828282]'>
              Achieved reduction in project execution time by optimising team
              availability
            </div>
            <div className='absolute top-[-25px] left-[-15px]'>
              <img
                src={sparkle}
                alt='sparkle'
                className='w-[80px] h-[80px] pt-2 pl-2'
              />
            </div>
          </div>

          {/* 10 Days Pill */}
          <div className='absolute bottom-[35px] left-[-40px] w-[160px] h-[50px] rounded-3xl bg-white drop-shadow-md flex items-center'>
            <div className='rounded-full w-[30px] h-[30px] mx-2 bg-green-100 flex justify-center items-center'>
              <img
                src={vector}
                alt='Vector'
                className='w-[30px] h-[30px] p-[6px]'
              />
            </div>
            <div className='flex flex-col text-xs font-manrope gap-[2px]'>
              <p className='font-bold'>10 Days</p>
              <p className='font-medium text-[#828282]'>Staff Deployment</p>
            </div>
          </div>

          {/* $0.5 Div */}
          <div className='absolute top-[240px] right-[-50px] w-[160px] h-[150px] bg-[#002E18] drop-shadow-md rounded-3xl'>
            <div className='flex flex-row space-x-2 mt-6 ml-2'>
              <div className='font-switzer font-medium text-4xl text-white'>
                $0.5
              </div>
              <div className='font-switzer pt-4 font-medium text-[#A6A3A0]'>
                MILLION
              </div>
            </div>
            <div className='font-manrope w-[160px] h-[80px] font-medium pt-4 pb-2 pl-2 text-xs text-[#CCCCCC]'>
              Reduced client expenses by saving on hiring and employee costs.
            </div>
          </div>
        </div>
        {/* Right Div */}
        <div className='w-[400px] h[500px]'>
          <div className='font-manrope font-semibold text-4xl pt-8'>
            Enhance fortune 50 company’s insights teams research capabilities
          </div>
          <div className='flex flex-row space-x-2 pt-10'>
            <div className='bg-[#2DA950] h-[10px] w-[10px] rounded-full'></div>
            <div className='bg-[#E4E3E3] h-[10px] w-[10px] rounded-full'></div>
            <div className='bg-[#E4E3E3] h-[10px] w-[10px] rounded-full'></div>
          </div>
          <div className='pt-16'>
            <button className='rounded-full border-2 border-black px-6 py-4 bg-black text-white font-manrope flex items-center'>
              Explore More{' '}
              <img src={arrow} className='h-[10px] w-[10px] ml-2' alt='' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
