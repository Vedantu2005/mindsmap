import React from 'react'
import MoreBlog from '../components/moreblog'
import ContactForm from '../components/ContactForm'
import NLPHero from '../components/NLPHero'
import Testimonial from '../components/Testimonial'
import NLP1 from '../components/NLP1'
import NLP2 from '../components/NLP2'
import NLP3 from '../components/NLP3'
import NLP4 from '../components/NLP4'
import NLP5 from '../components/NLP5'
import NLP6 from '../components/NLP6'
import NLP7 from '../components/NLP7'
import NLP8 from '../components/NLP8'
import NLP9 from '../components/NLP9'
import NLP10 from '../components/NLP10'
import NLP11 from '../components/NLP11'
import NLP12 from '../components/NLP12'
import NLP13 from '../components/NLP13'

const NLP = () => {
  return (
    <div>
      <NLPHero />
      <NLP2 />
      <NLP3 />
      <NLP4 />
      <NLP5 />
      <NLP6 />
      <NLP7 />
      <NLP8 />
      <NLP9 />
      <NLP10 />
      <NLP11 />
      <NLP12 />
      <Testimonial />
      <NLP13 />
      <NLP1 />
      <MoreBlog />
      <div className='py-10 lg:py-0'>
        <ContactForm />
      </div>

    </div>
  )
}

export default NLP
