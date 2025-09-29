import { useState } from "react";
import logo from "../assets/logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="flex justify-between items-center p-4 w-full z-30 absolute md:relative bg-transparent md:bg-transparent">
      
        <div className="flex items-center text-white md:text-neutral-900">
          <img src={logo} alt="ctsebenza-logo" className="object-cover w-10" />
          <h1 className="font-bold ml-2 dark:text-white">Ct Sebenza</h1>
        </div>

     
        <nav className="hidden md:flex gap-6 text-white md:text-neutral-900 dark:text-white">
          <a href="#home" className="hover:text-amber-300">Home</a>
          <a href="#services" className="hover:text-amber-300">Services</a>
          <a href="#about" className="hover:text-amber-300">About</a>
          <a href="#contact" className="hover:text-amber-300">Contact</a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-white"
          >
            {menuOpen ? (
              <span className="text-3xl text-white z-41">&times;</span> 
            ) : (
              <span className="text-3xl">&#9776;</span> 
            )}
          </button>
        </div>
      </section>

  
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-neutral-900 text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col p-8 gap-8 text-2xl z-40`}
      >
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
