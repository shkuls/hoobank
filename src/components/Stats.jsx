import React from 'react'


const Stats = () => {
  return (
    
    <div className='z-10 flex flex-col sm:flex-row font-[500] content-evenly w-full p-5'>
        <p className='my-3 text-white align-middle text-4xl'>
          3800+
        </p>
        <p className="text-gradient sm:m-auto font-poppins  ">
          USER ACTIVE
        </p>
        <p className="mx-10 text-white align-middle m-auto font-poppins hidden sm:inline">
        |
        </p>
        <p className='text-white  align-middle text-4xl my-3 mt-7 sm:my-4'>
          230+
        </p>
        <p className="text-gradient sm:m-auto align-middle  font-poppins  ">
        TRUSTED BY COMPANY
        </p>
        <p className="mx-10 text-white align-middle m-auto font-poppins hidden sm:inline">
        |
        </p>
        <p className='text-white align-middle text-4xl my-3 mt-7 sm:my-4'>
        $230M+
        </p>
        <p className="text-gradient sm:m-auto align-middle  font-poppins ">
        TRANSACTION
        </p>
      
        <div className='z-0 absolute h-[140%] w-[40%] bottom-0 pink__gradient sm:hidden'/>
      
    </div>
  )
}

export default Stats
