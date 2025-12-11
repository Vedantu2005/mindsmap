import React from "react";
import GptIntegrationHero from "../components/gptIntegreationHero";
import GptIntegrationFaq from "../components/gptIntegrationFaq";
import ContactForm from "../components/ContactForm";
import GptIntegration1 from "../components/gptIntegration1";
import GptIntegration2 from "../components/gptIntegration2";
import GptIntegration3 from "../components/gptIntegration3";
import GptIntegration4 from "../components/gptIntegration4";
import GptIntegration5 from "../components/gptIntegreation5";

function GptIntegration() {
  return (
    <>
      <div className="flex items-center flex-col">
        <div className="w-full">
          <GptIntegrationHero />
        </div>
        <div className="w-[90%]">

          <GptIntegration1 />
          <GptIntegration2 />
          <GptIntegration3 />
          <GptIntegration4 />
          <GptIntegration5 />
          <GptIntegrationFaq />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default GptIntegration;
