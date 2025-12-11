import React from 'react';

// Input field component for reusability
const FormInput = ({ icon, type, placeholder, name }) => (
  <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
      {icon}
    </span>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={placeholder.includes('*')}
      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
    />
  </div>
);

// Icon components
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>;
const CompanyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" /></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>;
const PencilIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>;
const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 ml-2 group-hover:-mt-1 group-hover:ml-0 transition-transform rotate-90 group-hover:rotate-55 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>;

const ContactForm = () => {
  return (
    <div className="bg-white font-sans w-full lg:py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        <div className="relative grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Left Side: Info & Design */}
          <div className="p-8 sm:p-12 bg-cyan-500 text-white flex flex-col justify-between relative overflow-hidden">
             <div>
                <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                <p className="mt-4 text-cyan-100 max-w-md">
                    Have a project in mind? We’d love to hear about it. Fill out the form and we'll get back to you as soon as possible.
                </p>
                 <div className="mt-10 space-y-5">
                    <div className="flex items-center space-x-4">
                        <div className="bg-cyan-600/50 p-2 rounded-full"><EmailIcon /></div>
                        <span>businessdevelopment@mindsmapai.com</span>
                    </div>
                    {/* <div className="flex items-center space-x-4">
                        <div className="bg-cyan-600/50 p-2 rounded-full"><PhoneIcon /></div>
                        <span>+917000478823</span>
                    </div> */}
                 </div>
             </div>
             {/* Decorative shapes */}
             <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-white/10 rounded-full"></div>
             <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/10 rounded-full"></div>
          </div>
          
          {/* Right Side: Form */}
          <div className="p-8 sm:p-12">
            <div className="text-left mb-10">
              <h1 className="text-3xl font-bold text-gray-800">
                Let's Talk About Your Project
              </h1>
            </div>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput icon={<UserIcon />} type="text" placeholder="Name*" name="name" />
                <FormInput icon={<CompanyIcon />} type="text" placeholder="Company Name*" name="company" />
                <FormInput icon={<EmailIcon />} type="email" placeholder="Business email*" name="email" />
                <FormInput icon={<PhoneIcon />} type="tel" placeholder="Phone" name="phone" />
              </div>
              <div className="mt-6 relative">
                 <span className="absolute top-4 left-0 flex items-center pl-4 text-gray-400">
                    <PencilIcon />
                </span>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows="5"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full group bg-[#00B4D8] cursor-pointer text-white font-bold text-lg py-3 px-10 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Send Message
                  <SendIcon />
                </button>
              </div>
              <p className="mt-6 text-center text-sm text-gray-500">
                By clicking Send Message, you agree to our{' '}
                <a href="#" className="font-medium text-cyan-600 hover:underline">
                  Terms of Use
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium text-cyan-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

