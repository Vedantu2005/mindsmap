import React from 'react'
import VirtualHero from '../components/VirtualHero'
import Virtual1 from '../components/Virtual1'
import Virtual2 from '../components/Virtual2'
import Virtual3 from '../components/Virtual3'
import Virtual4 from '../components/Virtual4'
import Testimonial from '../components/Testimonial'
import Virtual5 from '../components/Virtual5'
import Virtual6 from '../components/Virtual6'
import MoreBlog from '../components/moreblog'
import ContactForm from '../components/ContactForm'

const Virtual = () => {
  return (
    <div>
      <VirtualHero />
      <Virtual1 />
      <Virtual2 />
      <Virtual3 />
      <Virtual4 />
      <div className='-mt-25 py-5'>
        <Testimonial />
      </div>
      {/* <Virtual5 /> */}
      <Virtual6 />
      <MoreBlog />
      <div className='py-10 lg:py-0'>
      <ContactForm />

      </div>
    </div>
  )
}

export default Virtual
