import React from 'react'

const Button = (props) => {
  return (
    <div className={` z-50 h-[64px] w-[170px] bg-blue-gradient rounded-xl font-poppins flex ${props.styles} my-6`}>
       <p className='text-center w-[80%] m-auto align-middle'>
        Get Started
       </p>
    </div>
  )
}

export default Button
