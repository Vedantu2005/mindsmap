import React from 'react'
import ContactForm from '../components/ContactForm'
import MoreBlog from '../components/moreblog'
import CallHero from '../components/CallHero'
import Virtual5 from '../components/Virtual5'
import Call1 from '../components/Call1'
import Call2 from '../components/Call2'
import Call3 from '../components/Call3'
import Call4 from '../components/Call4'
import Call5 from '../components/Call5'
import Call6 from '../components/Call6'
import Call7 from '../components/Call7'

const Call = () => {
    return (
        <div>
            <CallHero />
            <Call1 />
            <Call2 />
            <Call3 />
            {/* <Virtual5 /> */}
            <Call4 />
            <Call5 />
            <Call6 />
            <Call7 />
            <MoreBlog />

            <div className='py-10 lg:py-0'>
                <ContactForm />
            </div>
        </div>
    )
}

export default Call
