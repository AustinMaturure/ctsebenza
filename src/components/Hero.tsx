import heroimg from '../assets/pexels-clickerhappy-38070.jpg'
import logo from "../assets/logo.webp"
export default function Hero(){
    return(
        <>
<section className="flex justify-between p-2 items-center h-dvh w-dvw">
  <div className="h-full w-full gap-4 p-10 flex ">
    <div className="w-1/2 bg-[#94A58D] rounded-2xl z-10 p-6 flex flex-col  justify-center ">
      <div className='text-white' >
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-4 text-left">
          Expert Construction, Plumbing, Electrical, Kitchen and General Solutions.
        </h1>
        <p className="text-left">
          At ctsebenza, our main goal is delivering quality services that empower growth. We are committed to providing tailored solutions that not only meet immediate needs but also lay the foundation for long-term success. By combining innovation, collaboration, and deep industry insight.
        </p>
      </div>
     
    </div> 
    <div className='w-1/2 h-full relative'>
        <img src={heroimg} alt="" className='h-full object-cover rounded-2xl'/>
     
      </div>
  </div>
</section>

        
        </>
    )
}