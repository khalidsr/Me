import reactt from "../assets/react.svg"
import c_Plus from "../assets/C_plus.png"

import docker_comp from "../assets/docker-compose.png"
import git from "../assets/Git-logo.svg.png"
import dock from "../assets/docker-logo.png"
import c_langue from "../assets/c.png"
import jss from "../assets/js.png"

const Skils =()=>{
const tech = [
    {
        id:1,
        src : dock,
        title: "Docker",
        style: "shadow-blue-300",
    },
    {
        id:2,
        src : docker_comp,
        title: "Docker Compose",
        style: "shadow-cyan-500",
    },
    {
        id:3,
        src : reactt,
        title: "Docker",
        style: "shadow-blue-600",
    },
    {
        id:4,
        src : git,
        title: "Docker",
        style: "shadow-orange-500",
    },
    {
        id:5,
        src : jss,
        title: "Git",
        style: "shadow-yellow-500",
    },
    {
        id:6,
        src : c_langue,
        title: "C",
        style: "shadow-blue-500",
    }
    ,
    {
        id:7,
        src : c_Plus,
        title: "C++",
        style: "shadow-blue-500",
    }
]
    return (
        <div className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            <div className="ma-w-sceen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"> Skils </p>
                    <p className="py-6"> These are the technologies I've worked with </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                   {
                       tech.map(({id, src, title, style})=>(
                        <div key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                            >
                            <img className="w-20 mx-auto" src={src} alt="dock"/>
                            <p className="mt-4">{title}</p>
                        </div> 
                    ))}
                  </div>
            </div>
        </div>
    )
}
export default Skils