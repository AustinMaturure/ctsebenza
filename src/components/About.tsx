import { Fade } from "react-awesome-reveal";
import teamImg from "../assets/team.webp"

export default function About(){
    const text = "CT Sebenza (Pty) Ltd, established in 2020 by experienced and driven individuals, is committed to delivering high-quality services that meet the needs of both clients and the community. With a focus on excellence, timely service delivery, and community empowerment, the company aims to create sustainable job opportunities, especially for the youth. CT Sebenza values integrity, results-driven solutions, effective communication, and client satisfaction. "
    const team = "At CT Sebenza, our passionate and diverse team is driven by excellence, innovation, and a shared vision for growth. We invest in our employees' development and foster a collaborative, inclusive culture where every member thrives. Our commitment to integrity, professionalism, and client satisfaction helps us build lasting relationships and deliver tailored, high-quality solutions.";

    return(
        <>
<section className="p-6 md:p-10" id="about"> 


  <div className="md:p-10 text-center">
    <h1 className="text-4xl font-bold">Enough about <i>What</i> we do, Who are we?</h1>
    <Fade fraction={0.2}>
      <h2 className="text-xl md:text-2xl p-4 md:p-6 md:leading-10">{text}</h2>
    </Fade>
  </div>

  <div className="flex flex-col md:flex-row gap-4 md:p-10 items-center">
 
    <div className="md:w-1/2 md:sticky top-10 self-start mt-10 md:mt-0">
      <h1 className="text-4xl text-center md:text-left font-bold mb-4 md:mb-0"><i>Who</i> will you be working with?</h1>
      <Fade fraction={0.1}>
        <h2 className="mb-4 md:mb-0 text-xl text-center md:pt-6 md:pr-6 pl-0 md:text-left">{team}</h2>
      </Fade>
    </div>

    <div className="md:w-1/2 sm:items-center">
      <Fade fraction={0.1}> <img className="w-full rounded-xl object-cover" src={teamImg} alt="Team" /> </Fade> 
    </div>
</div>

</section>


        
        </>
    )
}
