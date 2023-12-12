import React from 'react'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return ( 
    <span className='sm:inline  hidden font-[500] hover:cursor-pointer m-auto  sm:h-[140px] rounded-full sm:w-[140px] group bg-blue-gradient h-[90px] w-[90px] sm:p-1 p-[0.1rem] items-center mx-20 group-hover:rotate-[40deg] transition-all'>
          <div className='h-[100%]  bg-primary m-auto rounded-full flex'>
            <div className='m-auto align-middle text-gradient'>

              <div id="getStarted" className='flex flex-row justify-center'>
              <p >Get</p>
              <img  src={arrowUp} className='ml-1 group-hover:rotate-[40deg] transition-all' />
              
              </div>
              <p className='text-center'>Started</p>
            </div>

          </div>
    </span>
  )
}

export default GetStarted
