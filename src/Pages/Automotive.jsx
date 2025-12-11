import React from 'react'
import MoreBlog from '../components/moreblog'
import ContactForm from '../components/ContactForm'
import Auto8 from '../components/Auto8'
import Auto7 from '../components/Auto7'
import Auto9 from '../components/Auto9'
import Auto6 from '../components/Auto6'
import Auto5 from '../components/Auto5'
import Auto4 from '../components/Auto4'
import Auto3 from '../components/Auto3'
import Auto2 from '../components/Auto2'
import AutoHero from '../components/AutoHero'

const Automotive = () => {
    return (
        <div>
            <AutoHero />
            <Auto2 />
            <Auto3 />
            <Auto4 />
            <Auto5 />
            <Auto6 />
            <Auto7 />
            <Auto8 />
            <Auto9 />
            <MoreBlog />
            <div className='py-10 lg:py-0'>
                <ContactForm />
            </div>
        </div>
    )
}

export default Automotive
