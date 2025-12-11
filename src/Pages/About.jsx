import React from 'react'
import About1 from '../components/About1'
import AwsPartner from '../components/AwsPartner'
import Certificates from '../components/Certificates'
import Testimonial from '../components/Testimonial'
import ContactForm from '../components/ContactForm'
import About2 from '../components/About2'
import About3 from '../components/About3'
import WhoWeAre from '../components/WhoWeAre'
import About4 from '../components/About4'
import About5 from '../components/About5'
import ReportBanner from '../components/ReportBanner'

const About = () => {
    return (
        <div>
            <About1 />
            {/* <AwsPartner /> */}
            <About2 />
            <WhoWeAre />
            <About4 />
            <About5 />
            <Testimonial />
            <ReportBanner />
            <ContactForm />
        </div>
    )
}

export default About
