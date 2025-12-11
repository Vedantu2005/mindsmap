import React from 'react'
import CECGlobalState from '../components/customerExp1';
import CECServices from '../components/CustomerExp2';
import CECTechniques from '../components/CustomerExp3';
import CECIndustries from '../components/CustomerExp4';
import WhyCEC from '../components/CustomerExp5';
import CECNeeds from '../components/CustomerExp6';
import CECPitch from '../components/CustomerExp7';
import CustomerExpHero from '../components/customerExpHero';
import ContactForm from '../components/ContactForm';


const CustomerExperienceConsulting = () => {
  return (
    <>
    <CustomerExpHero/>
    <CECGlobalState />
    <CECServices />
    <CECTechniques />
    <CECIndustries />
    <WhyCEC />
    <CECNeeds />
    <CECPitch />
    <ContactForm/>
    </>
  )
}

export default CustomerExperienceConsulting