

import dev from "../assets/devloper.png"
import {FiArrowRight} from "react-icons/fi"


const Home =()=>{
    const scrollToSection = (id:any) => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      };
    return (
        <div id="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  ' >
         
         <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold00 text-white'>
                    I'm a DevOps Learner 
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                I am a dedicated and ambitious student at 1337 School,
                 with a passion for exploring the realms of DevOps.
                 My journey in the tech world has been shaped by an insatiable curiosity and a relentless drive to understand the intricate interplay between development and operations.
                </p>
            <div>
                <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                 onClick={() => {scrollToSection('projects')}}
                > Projects
                    <span className="group-hover:rotate-90 duration-300"><FiArrowRight size={25} className="ml-1"/></span>
                </button>
            </div>
         </div>
         <div>
            <img src={dev} alt="dev" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>
         </div>
        </div>
    )
}
export default Home