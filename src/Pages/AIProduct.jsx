import React from 'react'

import ContactForm from '../components/ContactForm'
import Company from '../components/Company'
import ProductDevelopmentPage from '../components/aiProd1'
import AIServicesPage from '../components/aiProd2'
import TransformativeAI from '../components/aiProd3'
import OurCompetence from '../components/aiProd4'
import WhyWorkWithMindsmapAI from '../components/aiProd5'
import Testimonial from '../components/Testimonial'
import AIProdHero from '../components/AIProdHero'

const AIProduct = () => {
  return (
    <div>
      <AIProdHero />
      <div className='mt-15'>
        <Company />
      </div>
      <ProductDevelopmentPage />
      <AIServicesPage />
      <TransformativeAI />
      <OurCompetence />
      <WhyWorkWithMindsmapAI />
      <Testimonial />
      <div className='py-10 lg:py-0'>
        <ContactForm />
      </div>

    </div>
  )
}

export default AIProduct
