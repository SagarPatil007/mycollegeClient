import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">

        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
          </p>
        </div>
  
    <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
      <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
        <button
          className={`flex w-full items-center justify-between px-4 py-5 sm:p-6`}
          onClick={() => toggleAccordion(0)}
        >
          <span className="flex text-lg font-semibold text-black">How do I get started?</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform ${
              activeIndex === 0 ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {activeIndex === 0 && (
          <div className="px-4 py-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
          iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?</div>
        )}
      </div>


      <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
        <button
          className={`flex w-full items-center justify-between px-4 py-5 sm:p-6`}
          onClick={() => toggleAccordion(1)}
        >
          <span className="flex text-lg font-semibold text-black">Trusted Or Untrusted ?</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform ${
              activeIndex === 1 ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {activeIndex === 1 && (
          <div className="px-4 py-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
          iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?</div>
        )}
      </div>

      <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
        <button
          className={`flex w-full items-center justify-between px-4 py-5 sm:p-6`}
          onClick={() => toggleAccordion(2)}
        >
          <span className="flex text-lg font-semibold text-black">It is Free or paid ?</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform ${
              activeIndex === 2 ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {activeIndex === 2 && (
          <div className="px-4 py-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
          iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?</div>
        )}
      </div>
    </div>
    </section>
  );
};

export default FAQ;
