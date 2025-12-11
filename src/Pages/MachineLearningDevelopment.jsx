import React from 'react'
import MachineLearningUseCase from '../components/MLDev1'
import MLApproach from '../components/MLDev2'
import MLModel from '../components/MLDev3'
import MLCycle from '../components/MLDev4'
import MLTechs from '../components/MLDev5'
import WorkMLD from '../components/MLDev6'
import CallToActionMLD from '../components/MLDev7'
import MLDFaqs from '../components/MLDev8'
import ContactForm from '../components/ContactForm'
import MLDevHero from '../components/MLDevHero'

const MachineLearningDevelopment = () => {
  return (
    <>
    <MLDevHero/>
    <MachineLearningUseCase />
    <MLApproach />
    <MLModel />
    <MLCycle />
    <MLTechs />   
    <WorkMLD />    
    <CallToActionMLD />  
    <MLDFaqs />
    <ContactForm/>
    </>
  )
}

export default MachineLearningDevelopment