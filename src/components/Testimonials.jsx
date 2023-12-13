import React from 'react'
import { features, feedback } from '../constants'
import { quotes } from '../assets'
import FeedbackCard from './FeedbackCard'
import styles from '../style'

const Testimonials = () => {
  return (
    <section  className='w-full m-auto'>

      <div className='flex flex-row'>

        <h2 className={'font-poppins xs:text-[30px] text-[40px] text-white w-3/4'}>
        What people are 
        <br></br>
        saying about us
        </h2>
        <p className={styles.paragraph + 'max-width-[450px] align-middle m-auto text-left'}>
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <div className='flex flex-row'>
        {feedback.map((feed , index)=>(
            <FeedbackCard {...feed} key={index}/>
           ))}
      </div>

      
    </section>
  )
}

export default Testimonials
