import logo from "../assets/logo.webp"

export default function Navbar(){
    return(
        <>
        <section className="flex justify-between p-2 items-center absolute z-20 w-full">
            <header>
                <div><img src={logo} alt="ctsebenza-logo" className="object-cover w-10"/></div>
            </header>
            <nav>
                <ul className="flex gap-4">
                    <li className="text-amber-300">Home</li>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </section>
        
        </>
    )
}