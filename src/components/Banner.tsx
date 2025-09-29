
import { useInView } from 'react-intersection-observer';
import { Fade } from "react-awesome-reveal";

export default function Banner(){
 

  return (
    <section className='w-full bg-neutral-900 text-blue-400'>

      <section className=' flex w-full'>
        <div className='w-full flex p-10 overflow-hidden justify-between'>
    
       <Fade>
  <div className="w-full">
    
    <footer className="bg-neutral-900 w-full h-full  rounded-4xl text-white mt-6 flex justify-between">
      <div className="flex flex-col md:flex-row justify-between gap-8 w-full">
        {/* Company Info */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">CT Sebenza</h3>
          
          <p className="text-sm text-neutral-300">
            Delivering reliable construction, plumbing, electrical, HVAC, and maintenance services across Mpumalanga.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
          <p>📍 Mpumalanga, South Africa</p>
          <p>📞 <a href="tel:+27716399770" className="underline">071 639 9770</a></p>
          <p>📧 <a href="mailto:ctsebenza@gmail.com" className="underline">ctsebenza@gmail.com</a></p>
        </div>

        {/* Navigation */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      
    </footer>
   
  </div>
</Fade>
</div>
       
      </section> <div className="flex-col gap-1 justify-between border-t p-6 border-neutral-700 mt-6 pt-4 text-sm text-left text-neutral-400">
       <p> &copy; {new Date().getFullYear()} CT Sebenza. All rights reserved. Designed and Developed by <a href="https://austinmaturure.netlify.app/" className='decoration-0 decoration-amber-300 underline'>⚡</a></p>
        <p><i>Sithi Sebenza!</i> ~ We say; Work!</p>
      </div>

    </section>
  );
}
