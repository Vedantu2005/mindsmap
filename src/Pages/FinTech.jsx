import React from 'react'
import MoreBlog from '../components/moreblog'
import ContactForm from '../components/ContactForm'
import FinTechhero from '../components/FinTechhero'
import FinTech1 from '../components/FinTech1'
import FinTech2 from '../components/FinTech2'
import FinTech3 from '../components/FinTech3'
import FinTech4 from '../components/FinTech4'
import FinTech5 from '../components/FinTech5'
import FinTech8 from '../components/FinTech8'
import FinTech7 from '../components/FinTech7'
import FinTech6 from '../components/FinTech6'

const FinTech = () => {
    return (
        <div>
            <FinTechhero />
            <FinTech1 />
            <FinTech2 />
            <FinTech3 />
            <FinTech4 />
            <FinTech5 />
            <FinTech6 />
            <FinTech7 />
            <FinTech8 />
            <MoreBlog />
            <div className='py-10 lg:py-0'>
            <ContactForm />
            </div>
        </div>
    )
}

export default FinTech
