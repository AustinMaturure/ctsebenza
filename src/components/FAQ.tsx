import { useState } from "react";
import { Fade } from "react-awesome-reveal";
const faqs = [
  {
    question: "01. Where Does CT Sebenza Operate?",
    answer:
      "CT Sebenza offers construction, electrical, plumbing, HVAC installation, general maintenance, kitchen supplies, and pump services around Mpumalanga — including eMbombela (Nelspruit), eMalahleni (Witbank), Standerton, eMkhondo (Piet Retief), Malalane, Ermelo, Barberton, and Sabie.",
  },
  {
    question: "02. What Services Do You Offer?",
    answer:
      "We offer construction, plumbing, electrical, aircon installation, general maintenance, and more.",
  },
  {
    question: "03. What Are Your Working Hours?",
    answer:
      "CT sebenza's working hours are 08:00 a.m to 17:00 p.m Monday to Friday and O8:00 to 12:00pm on Saturdays with Sundays being closed.",
  },
  {
    question: "04. Is CT Sebenza a Registered and Certified Service Provider?",
    answer:
      "Yes, CT Sebenza is a registered company with trained specialists in each field. We comply with industry standards and safety regulations, ensuring all work is carried out professionally and legally. Our team includes certified electricians, plumbers, and technicians with verified qualifications.",
  }
  
];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(Array(faqs.length).fill(false));

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <section className="p-6 mb-10" id="faq">
      <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>

      <div className="flex flex-col gap-4"><Fade cascade damping={0.2} triggerOnce={true}>
        {faqs.map((faq, index) => {
          const isOpen = openIndexes[index];
          return (
            <div key={index} className="border-b  p-4 pl-0">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleIndex(index)}
              >
                <h2 className="text-3xl font-semibold">{faq.question}</h2>
                <button className="text-6xl font-bold text-center">{isOpen ? "-" : "+"}</button>
              </div>

              <div
                className={`transition-[max-height] duration-1000 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <p className="mt-4 text-gray-700 dark:bg-gray-700 dark:text-white dark:p-3 dark:rounded-2xl">{faq.answer}</p>
              </div>
              
            </div>
           
          );
        })}</Fade>
      </div>
    </section>
  );
}
