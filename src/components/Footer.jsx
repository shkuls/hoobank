import React from 'react'
import styles from '../style'
import { footerLinks  , socialMedia} from '../constants'
import { logo } from '../assets'

const FooterLinks = ({links , title }) =>{
return(<div className='flex flex-col'>
  <p className='mx-5 font-poppins text-gray-50 '>
  {title}

  </p>
  <a className='mx-5 font-poppins text-gray-400 mt-1' href=''>
     hi
  </a>
</div>
)

}

const Footer = () => {
  return (
    <footer className='w-full bg-blue h-fit flex flex-col px-[9%] py-7 '>
      <div className='flex flex-row bg-blue'>
        <div >
          <img src={logo} className='scale-75' />
          <p className={`max-w-[300px] font-poppins text-gray-400 my-5 pl-10`}>
          A new way to make the payments easy, reliable and secure.
          </p>
        </div>
      <div className='flex flex-row'>
        {
          footerLinks.map((footerLink , index) => 
            (
            <FooterLinks  key={index} {...footerLink}/>
            
            )
          
          )
        }
      </div>

      </div>
      <div className='w-full px-10 h-[1px] bg-gray-700 rounded-xl'/>

      
      <div className='pl-10 flex flex-row flex-auto justify-between'>
        <p className=' font-poppins text-gray-400 my-10'>
        Copyright @ 2021 HooBank. All Rights Reserved.
        </p>
        <span className='flex flex-row ' > 
          {
            socialMedia.map((social , index) =>
            <img src={social.icon} className='mx-2' />)
          }
        </span>
        

      </div>
    </footer>
  )
}

export default Footer
