import React, { useRef } from "react";
import left from "../assets/left.svg";   
import right from "../assets/right.svg";

interface Service {
  title: string;
  text: string;
}

const services: Service[] = [
  {
    title: "Construction",
    text: "We provide affordable and high-quality roofing, tiling, and painting services for both interior and exterior projects...",
  },
  {
    title: "Plumbing",
    text: "Reliable plumbing services, from minor repairs to large installations — always with quality and trust in mind.",
  },
  {
    title: "Electrical and Aircon Installation",
    text: "Fast, efficient aircon installations by specialists. Registered and industry-trusted service delivery.",
  },
  {
    title: "HVAC",
    text: "Affordable cooling & storage solutions — perfect for families and businesses. Repairs included.",
  },
  {
    title: "General Maintenance",
    text: "Landscaping, canopy cleaning, window washing, and deep degrease cleaning for forecourts.",
  },
  {
    title: "Kitchen Supplies",
    text: "Commercial kitchen equipment supply, installation, and repair — from extractor fans to fryers.",
  },
  {
    title: "Pumps, Motors & Steam Boilers",
    text: "Energy-efficient equipment and custom steam solutions for heating and generation needs.",
  },
];

const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-neutral-100 p-10">
      <div className="flex flex-col gap-6">

        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold">Our Services</h1>
            <h2 className="text-gray-700">
              We provide a wide range of services, and excel in each and every one.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              className="rounded-full bg-white shadow p-2"
              onClick={() => scrollBy(-300)}
              aria-label="Scroll left"
            >
              <img className="w-6 h-6" src={left} alt="Scroll left" />
            </button>
            <button
              className="rounded-full bg-white shadow p-2"
              onClick={() => scrollBy(300)}
              aria-label="Scroll right"
            >
              <img className="w-6 h-6" src={right} alt="Scroll right" />
            </button>
          </div>
        </div>

   
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar touch-pan-x"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-xs flex-shrink-0 bg-white rounded-xl shadow p-5 snap-start"
            >
              <div className="w-full h-40 bg-gray-300 rounded mb-4 flex items-center justify-center text-sm text-gray-600">
                Broken Image
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
