import React from 'react'
import ContactForm from '../components/ContactForm'
import AIConHero from '../components/AIConHero'
import ConsultingPage from '../components/aiProduct1'
import HowWeSolveProblems from '../components/aiProduct2'
import BusinessServicesPage from '../components/aiProduct3'
import DataSciencePage from '../components/aiProduct4'
import IndustriesPage from '../components/aiProduct5'
import GenerativeAIPage from '../components/aiProduct6'

const AICounsult = () => {
    return (
        <div>
            <AIConHero />
            <ConsultingPage />
            <HowWeSolveProblems />
            <BusinessServicesPage />
            <DataSciencePage />
            <IndustriesPage />
            <GenerativeAIPage />
            <div className='py-10 lg:py-0'>
                <ContactForm />
            </div>
        </div>
    )
}

export default AICounsult
