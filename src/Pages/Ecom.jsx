import React from 'react'

import MoreBlog from '../components/moreblog'
import ContactForm from '../components/ContactForm'
import EcomHero from '../components/EcomHero'
import Ecom1 from '../components/Ecom1'
import Ecom2 from '../components/Ecom2'
import Ecom3 from '../components/Ecom3'
import Ecom4 from '../components/Ecom4'
import Ecom5 from '../components/Ecom5'
import Ecom6 from '../components/Ecom6'

const Ecom = () => {
    return (
        <div>
            <EcomHero />
            <Ecom2 />
            <Ecom1 />
            <Ecom3 />
            <Ecom4 />
            <Ecom5 />
            <MoreBlog />
            <Ecom6 />
            <div className='py-10 lg:py-0'>
                <ContactForm />
            </div>
        </div>
    )
}

export default Ecom
