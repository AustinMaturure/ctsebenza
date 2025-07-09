import { Fade } from "react-awesome-reveal";
import smiling from "../assets/pexels-laualessia-20814721.jpg"

export default function Contact(){
    
    return(
        <>
        <section id="contact">
            
            <div className="flex flex-col md:flex-row bg-neutral-900 p-6 justify-between"><Fade>
                <div className="">
                    <h1 className="text-white text-6xl mb-2">We'd <i>Love</i> to hear about your Project</h1>
                    <div>

                   
                    <h2 className="text-white text-3xl">
  Call us on:{" "}
  <a href="tel:0716399770" className="underline hover:text-gray-300">
    071 639 9770
  </a>
</h2>

<h2 className="text-white text-3xl">
  Mail us at:{" "}
  <a href="mailto:ctsebenza@gmail.com" className="underline hover:text-gray-300">
    ctsebenza@gmail.com
  </a>
</h2>
                    </div>
                </div>
                </Fade>
                <Fade>
                <div className="flex gap-2"> 
                    <img  src={smiling}  alt="" className="h-96 object-cover"/>
                </div></Fade>
              
               
            </div>
        </section>



        
        </>
    )
}