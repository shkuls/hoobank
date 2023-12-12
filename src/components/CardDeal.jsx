import React from 'react'
import Button from './Button';
import {apple , card , google } from '../assets';
import styles , {layout } from '../style';


const CardDeal = () => {
  return (
    <section className={'flex md:flex-row-reverse flex-col-reverse ml-5'}>
    <div className={layout.sectionImg}>
      
      <img src={card} alt="biling" className='w-full h-full sm: relative z-[5] scale-75 ml-0'/>
      <div className='z-[0] absolute h-[40%] w-[40%] -left-1/2 top-0 pink__gradient'/>
      <div className='z-[1] sclae absolute h-[35%] w-[40%] -left-1/2 bottom-0 white__gradient'/>
    </div>
      <div className='align-left m-auto'>
        <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>
        Find a better card deal <br></br> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] my-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <Button/>

      </div>
    </section>
  )
}

export default CardDeal
