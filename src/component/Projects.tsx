import docker from "../assets/docker-compose 1.jpeg"
import http from "../assets/http.png"
import pong from "../assets/ping-pong.jpeg"
import bash from "../assets/bash.png"

const Projects = () =>{
const ports = [
    {
        id:1,
        src: docker,
        pro: "Inception",
        href: "https://github.com/khalidsr/inception",
    },
    {
        id:2,
        src: http,
        pro: "Webserv",
        href: "https://github.com/dependentmadani/webserv",
    },
    {
        id:3,
        src: pong,
        pro: "Ft_transcendence",
        href: "https://github.com/khalidsr/ft_transcendence",
    },
    {
        id:4,
        src: bash,
        pro: "Minishell",
        href: "https://github.com/khalidsr/minishell",
    }
]
    return (
        <div id="projects"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 ">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500"> projects </p>
                <p className="py-6"> Check out some of my work right here </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                ports.map(({id, src, pro,href})=>(

                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <a href={href}>
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"  />
                    </a>
                    <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" > {pro} </button>
                    
            </div>
            </div>
                
                ))
            }
            </div> 
       
         </div>
        </div>
    )
}
export default Projects