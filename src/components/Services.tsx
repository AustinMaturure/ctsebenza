import React, { useRef } from "react";
import left from "../assets/left.svg";   
import right from "../assets/right.svg";
import hvac from "../assets/hvac.webp"
import kitchen from "../assets/kitchen.webp"
import maintenance from "../assets/maintenance.webp"
import pumps from "../assets/pumps.webp"
import aircon from "../assets/aircon.jpg"
import construction from "../assets/construction.webp"
import plumbing from "../assets/plumbing.webp"
import { Fade } from "react-awesome-reveal";
interface Service {
  title: string;
  text: string;
}

const seriveImages = [construction, plumbing, aircon, hvac, maintenance, kitchen, pumps]

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
    <section className="bg-neutral-100 md:p-10 p-6  "  id="services">
      <div className="flex flex-col gap-6 ">

        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-5xl font-bold dark:text-gray-700">Our Services</h1>
            <h2 className="text-gray-700 text-xl">
              We provide a wide range of services, and excel in each and every one.
            </h2>
          </div>
          <div className="flex bg-white gap-2 rounded-4xl">
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
        ><Fade cascade damping={0.2} triggerOnce={true}>
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-xs flex-shrink-0 bg-white rounded-xl  p-5 snap-start"
            >
              <div className="w-full h-50 bg-gray-300 rounded  mb-2 flex items-center justify-center text-sm text-gray-600">
                <img className="rounded object-cover h-full" src={seriveImages[index]} alt="" />
              </div>
              <h3 className="text-3xl  font-bold mb-2 dark:text-gray-700">{service.title}</h3>
              <p className="text-gray-600 text-md">{service.text}</p>
            </div>
          ))}</Fade>
        </div>
      </div>
    </section>
  );
};

export default Services;
