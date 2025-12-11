import React from 'react'
import BigDataTrust from '../components/BigDataDev1'
import BigDataBenefit from '../components/BigDataDev2'
import BigDataApproach from '../components/BigDataDev3'
import BigDataIndustries from '../components/BigDataDev4'
import BigDataFaqs from '../components/BigDataFaqs'
import BigDataDevHero from '../components/BigDataDevHero'
import Contact from '../components/ContactForm';

const BigDataDevelopment = () => {
  return (
    <>
    <BigDataDevHero />
    <BigDataTrust />
    <BigDataBenefit />
    <BigDataApproach />
    <BigDataIndustries />
    <BigDataFaqs />
    <Contact />
    </>
  )
}

export default BigDataDevelopment