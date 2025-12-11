import React from 'react'
import LLMHero from '../components/LLMHero'
import MoreBlog from '../components/moreblog'
import ContactForm from '../components/ContactForm'
import Company from '../components/Company'
import LLM10 from '../components/LLM10'
import LLM9 from '../components/LLM9'
import LLM8 from '../components/LLM8'
import LLM7 from '../components/LLM7'
import LLM6 from '../components/LLM6'
import LLM5 from '../components/LLM5'
import LLM4 from '../components/LLM4'
import LLM3 from '../components/LLM3'
import LLM2 from '../components/LLM2'
import LLM1 from '../components/LLM1'

const LLM = () => {
  return (
    <div>
      <LLMHero />
      <LLM1 />
      <LLM2 />
      <LLM3 />
      <LLM4 />
      <LLM5 />
      <LLM6 />
      <LLM7 />
      <LLM8 />
      <LLM9 />
      <Company />
      <LLM10 />
      <MoreBlog />
      <div className='py-10 lg:py-0'>
        <ContactForm />
      </div>

    </div>
  )
}

export default LLM



