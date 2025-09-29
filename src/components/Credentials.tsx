
import CountUp from 'react-countup';
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer"; 

export default function Credentials(){
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className='w-full'>

      <section className='overflow-hidden'>
        <div className='flex flex-col md:flex-row p-10 overflow-hidden'>
        <Fade >
          <div className='p-1'> 
            <h1 className='text-3xl'>
              Your Trusted Partner in Quality Services  
              Delivering Tailored Solutions That Meet Your Needs  
              Elevating Everyday Spaces with Craftsmanship and Care
            </h1>  
          </div>
       </Fade>
       <Fade>
          <div>
            <h2>
              Empowering Homes and Businesses with Reliable Construction, Plumbing, and Electrical Solutions  
              Through Skilled Teams, Proven Integrity, and a Vision for Sustainable Growth That Lasts
            </h2>
          </div>
        </Fade> </div>
      
      </section>

      <section className='w-full p-10'>
        <div className='flex flex-col md:flex-row gap-7 md:gap-0 w-full justify-between'><Fade cascade damping={0.4}>
          <div>
          
            <h1>Completed</h1>
            <hr />
            <h1 className='text-7xl font-bold'>
              {inView ? <CountUp end={27} duration={4} /> : 0} +
            </h1>
            <h2>Projects</h2>
            
          </div>

          <div>
     
            <h1>Over</h1>
            <hr />
            <h1 className='text-7xl font-bold'>
              {inView ? <CountUp end={34} duration={6} delay={0.4}/> : 0} +
            </h1>
            <h2>Happy Customers</h2> 
          </div>
         

          <div>
       
            <h1>Acquired</h1>
            <hr />
            <h1 className='text-7xl font-bold'>
              {inView ? <CountUp end={10} duration={2} delay={0.6}/> : 0} +
            </h1>
            <h2>Skilled Team Members</h2>
        
          </div>

          <div ref={ref}>
         
              <h1>Completed</h1>
              <hr />
              <h1 className='text-7xl font-bold'>
                {inView ? <CountUp end={28} duration={8} delay={0.8}/> : 0} +
              </h1>
              <h2>Projects</h2>
            
          </div></Fade>
        </div>
      </section>

    </section>
  );
}
