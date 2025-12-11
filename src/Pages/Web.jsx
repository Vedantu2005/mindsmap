import React from 'react'
import WebHero from '../components/WebHero'
import ContactForm from '../components/ContactForm'
import MoreBlog from '../components/moreblog'
import Exper from '../components/Exper'
import Systems from '../components/WebDevelopment2'
import ProcessFlow from '../components/WebDevelopment3'
import Services from '../components/WebDevelopment4'
import FutureWeb from '../components/WebDevelopment5'
import Web2 from '../components/Web2'
import Web3 from '../components/Web3'

const Web = () => {
    return (
        <div>
            <WebHero />
            <Exper />
            <Systems />
            <ProcessFlow />
            <Services />
            <FutureWeb />
            <Web2 />
            <Web3 />
            <div className='py-10 lg:py-0'>
                <ContactForm />
            </div>

        </div>
    )
}

export default Web

