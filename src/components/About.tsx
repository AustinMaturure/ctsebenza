import { Fade } from "react-awesome-reveal";
import teamImg from "../assets/team.jpg"

export default function About(){
    const text = "CT Sebenza (Pty) Ltd, established in 2020 by experienced and driven individuals, is committed to delivering high-quality services that meet the needs of both clients and the community. With a focus on excellence, timely service delivery, and community empowerment, the company aims to create sustainable job opportunities, especially for the youth. CT Sebenza values integrity, results-driven solutions, effective communication, and client satisfaction. Through skilled workers and a strong development plan, including aftercare and project monitoring, the company strives to improve service standards and make a lasting impact in the service industry."
    const services = text.split(" ");
    const team = "At CT Sebenza, our passionate and diverse team is driven by excellence, innovation, and a shared vision for growth. We invest in our employees' development and foster a collaborative, inclusive culture where every member thrives. Our commitment to integrity, professionalism, and client satisfaction helps us build lasting relationships and deliver tailored, high-quality solutions.";

    return(
        <>
<section className="p-10" id="about"> 


  <div className="md:p-10 text-center">
    <h1 className="text-4xl font-bold">Enough about <i>What</i> we do, Who are we?</h1>
    <Fade fraction={0.2}>
      <h2 className="text-2xl md:p-6 leading-10">{text}</h2>
    </Fade>
  </div>

  <div className="flex flex-col md:flex-row gap-4 md:p-10">
 
    <div className="md:w-1/2 md:sticky top-10 self-start">
      <h1 className="text-4xl text-center md:text-left font-bold"><i>Who</i> will you be working with?</h1>
      <Fade fraction={0.1}>
        <h2 className="text-xl text-center md:pt-6 md:pr-6 pl-0 md:text-left">{team}</h2>
      </Fade>
    </div>

    <div className="w-1/2">
      <Fade fraction={0.1}> <img className="w-full rounded-xl" src={teamImg} alt="Team" /> </Fade> 
    </div>
</div>

</section>


        
        </>
    )
}