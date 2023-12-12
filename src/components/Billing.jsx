import React from 'react'
import {apple , bill , google } from '../assets';
import styles , {layout } from '../style';


const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse + ' ml-5'}>
    <div className={layout.sectionImgReverse}>
      
      <img src={bill} alt="biling" className='w-full h-full sm: relative z-[5] scale-75 ml-0'/>
      <div className='z-[0] absolute h-[40%] w-[40%] -left-1/2 top-0 pink__gradient'/>
      <div className='z-[1] sclae absolute h-[35%] w-[40%] -left-1/2 bottom-0 white__gradient'/>
    </div>
      <div className='align-left m-auto'>
        <h2 className={`${styles.heading2}`}>
        Easily control your <br></br>billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] my-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div>
          <img src={apple} className='inline cursor-pointer'/>
          <img src={google} className='inline m-5 cursor-pointer'/>

        </div>

      </div>
    </section>
  )
}

export default Billing
