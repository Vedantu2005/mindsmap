import React from 'react'
import Logistic1 from '../components/logistics1'
import Logisticshero from '../components/Logisticshero';
import Logistics2 from '../components/logistics2';
import Logistics3 from '../components/logistics3';
import Logistics4 from '../components/logistics4';
import Logistics5 from '../components/logistics5';
import Testimonial from '../components/Testimonial';
import Logistics6 from '../components/logistics6';
import Logistics7 from '../components/logistics7';
import MoreBlog from '../components/moreblog';
import ContactForm from '../components/ContactForm';
import Logistics8 from '../components/logistics8';
import Company from '../components/Company';

const Logistics = () => {
  return (
    <div>
        <Logisticshero />
        <div className='mt-10'>
            <Company />
        </div>
        <div className='mt-10'>
        <Logistics2 />

        </div>
        <Logistics3 />
        <Logistics4 />
        <Logistics5 />
        <Testimonial />
        <Logistics6 />
        <Logistics7 />
        <Logistics8 />
        <MoreBlog />
        <ContactForm />
    </div>
  )
}

export default Logistics;
