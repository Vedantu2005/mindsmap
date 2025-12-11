import React from "react";
import Systems from "../components/WebDevelopment2";
import Expertise from '../components/WebDevelopment1';
import ProcessFlow from "../components/WebDevelopment3";
import Services from "../components/WebDevelopment4";
import FutureWeb from "../components/WebDevelopment5";
import ContactForm from "../components/ContactForm";

const WebDevelopment = () => {
  return (
    <>
      
      <Expertise />
      <Systems />
      <ProcessFlow />
      <Services />
      <FutureWeb />
      <div className="py-10 lg:py-0">
        <ContactForm />
      </div>
    </>
  );
};

export default WebDevelopment;
