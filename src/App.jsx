import React from 'react'
import styles from './style'
import {  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero} from '../src/components'
import Button from './components/Button'

const App = () => {
  return (
    <div className="bg-primary w-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar/>
          
        </div>
        

      </div>

      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>        
        </div>
      </div>
      <div className={`bg-primary flex-col ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}></div>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>

      </div>




    </div>
  )
}

export default App
