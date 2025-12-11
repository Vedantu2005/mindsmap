import React from 'react'
import ContactForm from '../components/ContactForm'
import MoreBlog from '../components/moreblog'
import Senti1 from '../components/Senti1'
import Virtual5 from '../components/Virtual5'
import SentiHero from '../components/SentiHero'
import Senti2 from '../components/Senti2'
import Senti3 from '../components/Senti3'
import Senti4 from '../components/Senti4'
import Company from '../components/Company'
import Senti5 from '../components/Senti5'
import Senti6 from '../components/Senti6'
import Senti7 from '../components/Senti7'
import Senti8 from '../components/Senti8'
import Senti9 from '../components/Senti9'
import Senti10 from '../components/Senti10'

const Sentiment = () => {
    return (
        <div>
            <SentiHero />
            <Senti2 />
            <Senti3 />
            <Senti10 />
            <Senti8 />
            <Senti9 />
            <Senti6 />
            <Senti7 />
            <Senti5 />
            {/* <Virtual5 /> */}
            <Company />
            <Senti4 />
            <Senti1 />
            <MoreBlog />
            <ContactForm />
        </div>
    )
}

export default Sentiment
