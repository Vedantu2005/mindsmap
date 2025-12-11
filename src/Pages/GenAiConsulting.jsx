import React from "react";
import GenAi1 from "../components/genAiConsulting1";
import GenAi2 from "../components/genAiConsulting2";
import GenAi3 from "../components/genAiConsulting3";
import GenAi4 from "../components/genAiConsulting4";
import ContactForm from "../components/ContactForm";
import GenAi5 from "../components/genAiConsulting5";
import GenAiConsultingHero from "../components/genAiConsultingHero";
function App() {
  return (
    <>
      <GenAiConsultingHero />
      <GenAi1 />
      <div className="flex justify-center">
        <div className="w-[90%]">
          <GenAi2 />
        </div>
      </div>
      <GenAi3 />
      <GenAi4 />
      <GenAi5 />
      <div className="py-10 lg:py-0">
        <ContactForm />
      </div>
    </>
  );
}

export default App;
