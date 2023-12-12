import React from 'react'
import styles from '../style'
import Button from './Button'


const CTA = () => {
  return (
    <div className='w-full h-[293px] bg-black-gradient rounded-3xl px-5 flex flex-row mb-10'>
      <div className='m-auto ml-20'> 
      <h2 className={'text-[35px] font-semibold text-white font-poppins mb-5'}>
      Let’s try our service now!
      </h2>
      <p className={'font-normal text-gray-400 font-poppins max-w-[400px]'}>
      Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
      </div>
      <div className='flex pr-[15%] '>
        <span className='m-auto'>

        <Button/>
        </span>
      </div>


    </div>
  )
}

export default CTA
