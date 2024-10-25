import React, { useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons from react-icons

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const accordions = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces, particularly for single-page applications.',
    },
    {
      question: 'What are components in React?',
      answer: 'Components are reusable UI elements in React that can manage their own state and accept props.',
    },
    {
      question: 'What is the difference between state and props?',
      answer: 'State is mutable data managed within a component, while props are immutable data passed from parent to child components.',
    },
    {
      question: 'What is the purpose of the useEffect hook?',
      answer: 'The useEffect hook is used to perform side effects in functional components, such as fetching data or subscribing to events.',
    },
    {
      question: 'How can you conditionally render components in React?',
      answer: 'Conditional rendering can be done using JavaScript expressions like the ternary operator or logical && operator.',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="bg-white shade shadow-lg rounded-3xl w-full max-w-3xl p-10">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">Basic React Questions</h1>
        {accordions.map((item, index) => (
          <div key={index} className="border-b border-gray-200 mb-6 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h2 className="text-lg font-medium text-gray-800">{item.question}</h2>
              <span className="bg-[#146e6b] w-9 h-9 flex items-center justify-center rounded-full text-white transition-transform duration-200">
                {openIndex === index ? <FaMinus /> : <FaPlus />} {/* Change icon based on state */}
              </span>
            </div>
            <div
              ref={el => (contentRefs.current[index] = el)} // Assign each content div to refs
              className={`overflow-hidden transition-all duration-500 ease-in-out`} // Add ease-in-out for smoother transitions
              style={{
                maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0', // Use scrollHeight for max height
              }}
            >
              <p className={`py-4 text-gray-600 transition-opacity duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
