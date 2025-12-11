import React from "react";
import DevPatner1 from "../components/devPatner1";
import DevPatner2 from "../components/devPatner2";
import DevPatner3 from "../components/devPatner3";
import DevPatner4 from "../components/devPatner4";
import DevPatner5 from "../components/devPatner5";
import DevPatner6 from "../components/devPatner6";
import DevPatner7 from "../components/devPatner7";
import ContactForm from "../components/ContactForm";
import DevPatnerFaq from "../components/devPatnerFaq";
import DevPatnerHero from "../components/devPatnerHero";

function App() {
  return (
    <>
      <DevPatnerHero />
      <DevPatner1 />
      <DevPatner2 />
      <DevPatner3 />
      <DevPatner4 />
      <DevPatner5 />
      <DevPatner6 />
      <DevPatner7 />
      <DevPatnerFaq />
      <div className="py-10 lg:py-0">
        <ContactForm />
      </div>
    </>
  );
}

export default App;
