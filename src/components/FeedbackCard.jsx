import React from 'react'
import { quotes } from '../assets'
import styles from '../style'
const FeedbackCard = ({id,
content, name,
title,
img}) => {
  return (
    <div className='feature-card rounded-xl h-full w-[30%] m-5'>
      <img src={quotes} className='my-10 scale-90 mx-5'/>
      <p className={`max-w-[200px] font-poppins font-normal text-dimWhite text-[18px] m-5`}>
        {content}
      </p>
      <div className='flex items-stretch'>
        <img src={img} className='scale-50'/>
        <span className='m-auto text-left ml-0'>
          <p className='font-poppins font-normal text-white text-[18px] inline'>{name}</p>
          <p className='font-poppins font-normal text-gray-500 text-[13px]'>{title}</p>
        </span>
      </div>

    </div>
  )
}

export default FeedbackCard
