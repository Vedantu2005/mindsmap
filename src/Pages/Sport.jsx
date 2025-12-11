import React from 'react'
import Sport1 from '../components/sport1'
import Sport2 from '../components/sport2'
import Sport3 from '../components/sport3'
import MoreBlog from '../components/moreblog'
import ContactForm from '../components/ContactForm'
import Sport4 from '../components/sport4'
import Sport5 from '../components/sport5'
import Sport6 from '../components/sport6'
import Sport7 from '../components/sport7'
import SportHero from '../components/Sporthero'

const Sport = () => {
  return (
    <div>
      <SportHero />
      <Sport1 />
      <Sport2 />
      <Sport3 />
      <Sport4 />
      <Sport5 />
      <Sport6 />
      <Sport7 />
      <MoreBlog />
      <div className='py-10 lg:py-0'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Sport
