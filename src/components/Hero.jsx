import React from 'react'
import styles from '../style'
import {discount  , robot} from '../assets'
import GetStarted from './GetStarted'
import Button from './Button'

const Hero = () => {
  return (
    <section id="home" className={`hover:cursor-default flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex z- flex-row items-center py-[6px] px-4 bg-black-gradient rounded-[10px] mb-2 font-poppins'>
          <img src={discount} alt="discount"/>

          <p>
          <span className='ml-[13px] text-white'>20% &nbsp;</span>
          <span className='text-gray-500'>DISCOUNT FOR&nbsp;</span>
          <span className='  text-white'>1 MONTH&nbsp;</span>
          <span className='text-gray-500'>ACCOUNT&nbsp;</span>

          </p>

          
          
        </div>
        <div className='ss:flex flex-row md:mr-4 mr-0 '>

        <span className='my-5'>
          <div className="flex">

        <span>

        <p className='ml-2 font-poppins sm:text-[72px] tracking-wider text-[46px] font-[700] text-white'>The Next</p>
        <p className='ml-2 font-poppins sm:text-[72px] tracking-wider text-[46px] font-[700] text-gradient'>Generation</p>
        </span>
        <GetStarted/>
          </div>

        <p className='ml-2 font-poppins sm:text-[72px] tracking-wider text-[46px] font-[700] text-white'>Payment Method.</p>
        </span>
        </div>
        <p className={`${styles.paragraph} w-[483px] h-[93px] text-gray-400 my-3`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
        </p>
 

       
    <Button styles="sm:hidden"/>
    </div>
    <div>
      <img src={robot} alt="billing" className='my-[50px] md:my-0 w-[100%] h-[100%] relative z-[5] min-w-[400px] overflow-clip'/>

      <div className='z-[0] absolute h-[40%] w-[40%] top-0 pink__gradient'/>
      <div className='z-[1] absolute h-[35%] w-[40%] top-0 white__gradient'/>
      <div className='z-[0] absolute h-[100%] w-[40%] top-0 blue__gradient'/>
    </div>
    </section>
  )
}

export default Hero
