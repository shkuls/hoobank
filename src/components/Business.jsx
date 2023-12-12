import React from 'react'
import Button from './Button'
import styles , { layout } from '../style'
import {features} from '../constants'

const FeatureCard = ({id,icon,title,content}) =>{
  return(<div className=' flex flex-row px-5 feature-card h-[115px] w-[470px] rounded-[20px] mb-10 ml-10'>
    <img src={icon} className='mx-8 rounded-full ' />
    <div>
      <h3 className='font-poppins my-2'>{title}</h3>
      <p className={` pb-3 mb-2 text-base font-poppins text-left text-gray-400`}>
        {content}
      </p>
    </div>
  </div>)
};

const Business = () => {
  return (
    <div className='flex flex-col sm:flex-row text-white my-10 ml-2'>
      <div>
        <div className=''>
          <h2 className='leading-tight ml-2 font-poppins sm:text-[50px] tracking-wider text-[30px] font-[700] text-white'>
          You do the business,
          </h2>
          
          <h2 className='ml-2 font-poppins sm:text-[50px] tracking-wider text-[30px] font-[700] text-white'>
          we'll handle the money.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
          </p>
          <Button styles="text-black hover:cursor-pointer"/>
        </div>
      </div>
      <div className='w-60 flex flex-col content-evenly my-10 sm:m-0'>
          {features.map((feature)=>
            <FeatureCard key={feature.id} {...feature}/> 
          )}
      </div>
    </div>
  )
}

export default Business
