import heroimg from '../assets/pexels-clickerhappy-38070.webp'
import _logo from "../assets/logo.webp"
export default function Hero(){
    return(
        <>
<section className="flex md:flex-col justify-between md:pl-6 md:pr-6 md:pb-6 pt-0 items-center h-dvh w-dvw" id="home">

<div className="h-full w-full gap-4 pt-0 md:pl-6 md:pr-6 md:pb-10 flex flex-col md:flex-row">


<div className="md:w-1/2 bg-[#94A58D] md:rounded-2xl z-10 p-6 flex flex-col justify-center hero-bg-text h-full sm:rounded-none">

      <div className='text-white z-20' >
        <h1 className="text-5xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-4 text-left">
          Expert Construction, Plumbing, Electrical, Kitchen and General Solutions.
        </h1>
        <p className="text-left text-xl md:text-lg">
          At ctsebenza, our main goal is delivering quality services that empower growth. We are committed to providing tailored solutions that not only meet immediate needs but also lay the foundation for long-term success. By combining innovation, collaboration, and deep industry insight.
        </p>
      </div>
     
    </div> 
    <div className="hidden md:block md:w-1/2 h-full relative">
  <img src={heroimg} alt="" className="h-full object-cover rounded-2xl sm:rounded-none" />
</div>

  </div>
</section>

        
        </>
    )
}
