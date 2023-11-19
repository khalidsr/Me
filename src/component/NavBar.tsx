import  { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"


const NavBar =()=>{

    const [nav,setNav] = useState(false);

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
    const links = [
        {
            id: 1,
            link: 'home',
            target: 'home',
        },
        {
            id: 2,
            link: 'about',
            target: 'about',
        },
        {
            id: 3,
            link: 'projects',
            target: 'projects',
        },
        {
            id: 4,
            link: 'skils',
            target: 'skils',
        },
        {
            id: 5,
            link: 'contact',
            target: 'contact',
        }

    ];
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
          <h1 className="text-5xl font-bold font-signature ml-2"> Said Riyani </h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link, target }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              onClick={() => scrollToSection(target)}
            >
              {link}
            </li>
          ))}
        </ul>
        <div
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link,target }) => (
              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl" 
              onClick={() => {scrollToSection(target)
            setNav(!nav)}}
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}
export default NavBar