import React from 'react'
import Market1 from '../components/market1'
import Market2 from '../components/market2'
import Market3 from '../components/market3'
import Market4 from '../components/market4'
import Market5 from '../components/market5'
import Market6 from '../components/market6'
import Banner from '../components/Banner'
import Market7 from '../components/market7'
import MoreBlog from '../components/moreblog'
import ContactForm from '../components/ContactForm'
import MarketHero from '../components/markethero'
import Company from '../components/Company'

const Market = () => {
    return (
        <div>
            <MarketHero />
            <div className='mt-10'>
            <Company />

            </div>
            <div className='-mt-10'>
                <Market2 />
            </div>
            <Market3 />
            <Market4 />
            <Market5 />
            <Market6 />
            <Banner />
            <Market7 />
            <MoreBlog />
            <div className='py-10 lg:py-0'>
            <ContactForm />

            </div>
        </div>
    )
}

export default Market
