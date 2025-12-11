import React from 'react'
import ContactForm from '../components/ContactForm'
import AiChatbotHero from '../components/aiChatbotHero'
import AiChatbot1 from '../components/aiChatbot1'
import AiChatbot2 from '../components/aiChatbot2'
import AiChatbot3 from '../components/aiChatbot3'
import AiChatbot4 from '../components/aiChatbot4'
import AiChatbot5 from '../components/aiChatbot5'
import AiChatbot6 from '../components/aiChatbot6'
import AiChatbot7 from '../components/aiChatbot7'
import AiChatbotFaq from '../components/aiChatbotFaq'


function App() {

  return (
    <>
      <AiChatbotHero />
      <AiChatbot1 />
      <AiChatbot2 />
      <AiChatbot3 />
      <AiChatbot4 />
      <AiChatbot5 />
      <AiChatbot6 />
      <AiChatbot7 />
        <AiChatbotFaq />
        <div className='py-10 lg:py-0'>
        <ContactForm />
        </div>
    </>
  )
}

export default App
