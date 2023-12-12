import React from 'react'
import { clients } from '../constants'
import styles from '../style'
const Clients = () => {
  return (
    <div className={'w-full flex flex-row flex-wrap my-9'}>
      {
        clients.map((client  , index)=>(
          <img src={client.logo} className='scale-[0.5] object-contain flex flex-1 w-[200px]'/>
        ))
      }
    </div>
  )
}

export default Clients
