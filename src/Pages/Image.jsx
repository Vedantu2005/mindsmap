import React from 'react'
import ContactForm from '../components/ContactForm'
import ImgHero from '../components/ImgHero'
import Img9 from '../components/Img9'
import Img8 from '../components/Img8'
import Img7 from '../components/Img7'
import Img6 from '../components/Img6'
import Img5 from '../components/Img5'
import Img4 from '../components/Img4'
import Img3 from '../components/Img3'
import Img2 from '../components/Img2'
import Img1 from '../components/Img1'

const Image = () => {
    return (
        <div>
            <ImgHero />
            <Img1 />
            <Img2 />
            <Img3 />
            <Img4 />
            <Img5 />
            <Img6 />
            <Img7 />
            <Img8 />
            <Img9 />
            <div className='py-10 lg:py-0'>
                <ContactForm />
            </div>
        </div>
    )
}

export default Image
