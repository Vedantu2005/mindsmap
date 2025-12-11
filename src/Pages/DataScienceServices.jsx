import React from 'react'
import DataScienceTrust from '../components/DataScience1'
import DataScienceCases from '../components/DataScience2'
import DataScienceBenefits from '../components/DataScience3'
import DataScienceIndustry from '../components/DataScience4'
import WhyDataScience from '../components/DataScience5'
import DataScienceFaqs from '../components/DataScience6'
import ContactForm from '../components/ContactForm'
import DataScienceHero from '../components/DataScienceHero'

const DataScienceServices = () => {
  return (
    <>
    <DataScienceHero />
    <DataScienceTrust />
    <DataScienceCases />
    <DataScienceBenefits />
    <DataScienceIndustry />
    <WhyDataScience />
    <DataScienceFaqs />
    <ContactForm/>
    </>
  )
}

export default DataScienceServices