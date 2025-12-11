import React from 'react'
import MoreBlog from '../components/moreblog'
import ContactForm from '../components/ContactForm'
import RecomandHome from '../components/RecomandHome'
import Recomand1 from '../components/Recomand1'
import Recomand2 from '../components/Recomand2'
import Recomand3 from '../components/Recomand3'
import Recomand4 from '../components/Recomand4'
import Recomand6 from '../components/Recomand6'
import Recomand5 from '../components/Recomand5'

const Recomand = () => {
    return (
        <div>
            <RecomandHome />
            <Recomand1 />
            <Recomand2 />
            <Recomand3 />
            <Recomand4 />
            <Recomand5 />
            <Recomand6 />
            <MoreBlog />
            <div className='py-10 lg:py-0'>
                <ContactForm />
            </div>
        </div>
    )
}

export default Recomand
