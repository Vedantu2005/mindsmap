import React from 'react'
import MLStart from '../components/MLConsult1'
import MLDevService from '../components/MLConsult2'
import MLConService from '../components/MLConsult3'
import MLLifeCycle from '../components/MLConsult4'
import MLKeyUses from '../components/MLConsult5'
import WhyMLConsulting from '../components/MLConsult6'
import MLCFaqs from '../components/MLConsult7'
import ContactForm from '../components/ContactForm'
import Hero from '../components/MLConsultHero'

const MachineLearningConsulting = () => {
  return (
    <>
    <Hero/>
    <MLStart />
    <MLDevService />
    <MLLifeCycle />
    <MLConService />
    <MLKeyUses />
    <WhyMLConsulting />
    <MLCFaqs />
    <ContactForm/>
    </>
  )
}

export default MachineLearningConsulting