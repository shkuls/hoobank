import React from 'react'

import {useState} from 'react'

import {logo , close , menu} from '../assets'
import { navLinks } from '../constants'


const Navbar = () => {

  const [ state , setState] = useState(true);


  

  return (

   <>
   <nav className="flex py-6 justify-between flex-row-reverse items-center navbar w-full content-start flex-wrap sm:flex-row">
      <img src={state?menu:close} className="sm:hidden transition-all" onClick={()=>{setState(!state)}}/>

      <img src={logo} className="w-[124px] h-[32px]"/>


      <ul className="list-none sm:flex hidden justify-end items-center ">
        {
          navLinks.map((nav , index ) =>(
            <li key={nav.id}
            className={`font-poppins cursor-pointer font-normal   text-white text-[16px] mr-10`} >
              <a href={nav.id}>
                {nav.title}
              </a>
            </li>
          )
          )
        }

        
      </ul>

      
   </nav>
   
   <ul className={`list-none sm:hidden overflow-hidden ${state?'hidden':'flex-col'}  justify-end items-center delay-150 rounded-xl bg-black-gradient py-4`}>
        {
          navLinks.map((nav , index ) =>(
            <li key={nav.id}
            className={`my-5 text-center font-poppins cursor-pointer font-normal   text-white text-[16px] mr-10`} >
              <a href={nav.id}>
                {nav.title}
              </a>
            </li>
          )
          )
        }

        
      </ul>
   </>
   
   
  )
}


export default Navbar
