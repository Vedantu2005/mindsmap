import React from 'react'
import MoreBlog from '../components/moreblog'
import ContactForm from '../components/ContactForm'
import PreHero from '../components/PreHero'
import Pre1 from '../components/Pre1'
import Pre2 from '../components/Pre2'
import Pre3 from '../components/Pre3'
import Pre4 from '../components/Pre4'
import Pre5 from '../components/Pre5'
import Pre6 from '../components/Pre6'
import Pre7 from '../components/Pre7'
import Pre8 from '../components/Pre8'

const Predictive = () => {
  return (
    <div>
        <PreHero />
        <Pre8 />
        <Pre7 />
        <Pre6 />
        <Pre5 />
        <Pre4 />
        <Pre3 />
        <Pre2 />
        <Pre1 />
        <MoreBlog />
        <div className='py-10 lg:py-0'>
            <ContactForm />
        </div>
      
    </div>
  )
}

export default Predictive
