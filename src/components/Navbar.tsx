import logo from "../assets/logo.webp"

export default function Navbar(){
    return(
        <>
        <section className="flex justify-between p-2 items-center pb-2 pl-8 pr-8 w-full z-30 absolute  md:relative">
            <header>
                <div className="flex items-center text-white md:text-neutral-900"><img src={logo} alt="ctsebenza-logo" className="object-cover w-10"/> <h1 className="font-bold">Ct Sebenza</h1></div>
            </header>
            <nav>
                <ul className="flex gap-4  text-white md:text-neutral-900">
                    <li className="hover:text-amber-300 hover:cursor-pointer"><a href="#home">Home</a></li>
                    <li className="hover:text-amber-300 hover:cursor-pointer"><a href="#services">Services</a></li>
                    <li className="hover:text-amber-300 hover:cursor-pointer"><a href="#about">About</a></li>
                    <li className="hover:text-amber-300 hover:cursor-pointer"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </section>
        
        </>
    )
}