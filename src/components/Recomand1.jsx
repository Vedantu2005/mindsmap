import React from 'react'

const Recomand1 = () => {
  return (
    <div className="px-4 sm:px-6 py-10 sm:py-10 max-w-6xl mx-auto">
      
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center lg:hidden">
        Smart Contact Center with Amazon Connect
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
        
        <div className="max-w-2xl text-center lg:text-left order-2 lg:order-1">
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 hidden lg:block">
            Smart Contact Center with Amazon Connect
          </h2>

          <p className="mb-4 text-gray-700 leading-relaxed ">
            Recommendation systems allow companies to provide personalized offers and experience to their customers. Quality recommendations increase customer engagement and impact customer lifetime value.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed ">
            Mindsmap AI builds solutions adjusted and tailored according to each company’s KPIs.
          </p>
        </div>

        <div className="w-full sm:w-4/5 md:w-2/3 lg:w-96 order-1 lg:order-2">
          <img
            src="/RS1.webp"
            alt="NLP Services"
            className="w-full h-auto "
          />
        </div>
      </div>

    </div>
  );
}

export default Recomand1;