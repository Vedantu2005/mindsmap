import React from 'react'
import ContactForm from '../components/ContactForm'
import OcrHero from '../components/OcrHero'
import Ocr8 from '../components/Ocr8'
import Ocr7 from '../components/Ocr7'
import Ocr6 from '../components/Ocr6'
import Ocr5 from '../components/Ocr5'
import Ocr4 from '../components/Ocr4'
import Ocr3 from '../components/Ocr3'
import Ocr2 from '../components/Ocr2'

const OCR = () => {
  return (
    <div>
        <OcrHero />
        <Ocr2 />
        <Ocr3 />
        <Ocr4 />
        <Ocr5 />
        <Ocr6 />
        <Ocr7 />
        <Ocr8 />
      <div className='py-10 lg:py-0'>
        <ContactForm />
      </div>
    </div>
  )
}

export default OCR
