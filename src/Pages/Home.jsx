import React from 'react'
import Expertise from '../components/WebDevelopment1'
import Beneficial from '../components/Beneficial'
import Help from '../components/Help'
import Mission from '../components/Mission'
import Testimonial from '../components/Testimonial'
import Work from '../components/Work'
import AwsPartner from '../components/AwsPartner'
import Certificates from '../components/Certificates'
import Industries from '../components/Industries'
import Blog from '../components/Blog'
import ContactForm from '../components/ContactForm'
import HomeHero from '../components/HomeHero'

const Home = () => {
    return (
        <div className='p-0 m-0 '>
            <HomeHero/>
            <Expertise />
            <Beneficial />
            <Help />
            <Mission />
            <Testimonial />
            <Work />
            {/* <AwsPartner /> */}
            {/* <Certificates /> */}
            <Industries />
            <Blog />
            <ContactForm />

        </div>
    )
}

export default Home
