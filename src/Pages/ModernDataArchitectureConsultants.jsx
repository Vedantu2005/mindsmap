import React from 'react'
import ArchitectureServices from '../components/MordenDataArch1'
import BenefitsCarousel from '../components/MordenDataArch2'
import ArchitectureWork from '../components/MordenDataArch3'
import Industries from '../components/Industries'
import WhyArchitecture from '../components/MordenDataArch4'
import ArchitectFaqs from '../components/MordenDataArch5'
import ContactForm from '../components/ContactForm'
import MordernDataArchHero from '../components/MordenDataArchHero'

const ModernDataArchitectureConsultants = () => {
  return (
    <>
    <MordernDataArchHero/>
    <ArchitectureServices />
    <BenefitsCarousel />
    <ArchitectureWork />
    <Industries />
    <WhyArchitecture />
    <ArchitectFaqs />
    <ContactForm/>
    </>
  )
}

export default ModernDataArchitectureConsultants