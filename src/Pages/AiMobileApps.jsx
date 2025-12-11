import React from 'react'
import AIMobileAppPath from '../components/AIMobile1'
import AIMobileUses from '../components/AIMobile2'
import { AIinMobileDev } from '../components/AIMobile3';
import AIExpansion from '../components/AIMobile4';
import AIMobileHero from '../components/AIMobileHero';
import Contact from '../components/ContactForm';

const AiMobileApps = () => {
  return (
    <>
    <AIMobileHero />
    <AIMobileAppPath />
    <AIMobileUses />
    <AIinMobileDev />
    <AIExpansion />
    <Contact />
    </>
  )
}

export default AiMobileApps