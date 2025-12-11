import React from 'react'

const Pre6 = () => {
    const insights = [
        {
            text: "The global predictive analytics market size to reach $35.45 billion by 2027, growing at a CAGR of 21.9% from 2020 to 2027.",
            source: "Allied Market Research",
        },
        {
            text: "58% of enterprises are seeing a significant increase in customer retention and loyalty from using customer analytics.",
            source: "Forbes",
        },
        {
            text: "Post COVID-19 emergence, healthcare segment to witness significant growth owing to use of predictive analytics for precision medicine & genomics, population health & risk scoring, disease outbreak prediction, and more.",
            source: "Allied Market Research",
        },
    ];

    return (
        <div className="px-4 sm:px-8 lg:px-16 py-5 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8">
                Predictive Analytics Insights
            </h1>

            <div className="space-y-6 flex flex-col items-center">
                {insights.map((item, idx) => (
                    <div
                        key={idx}
                        className="border border-[#77bce8] shadow-lg transition-shadow duration-300 hover:shadow-blue-200 rounded-lg bg-white p-3 w-full max-w-3xl"
                    >
                        <h3 className="text-lg text-left font-normal mb-2">{item.text}</h3>
                        <p className="text-[#77bce8] text-left font-semibold">{item.source}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pre6
