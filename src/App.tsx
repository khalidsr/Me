
import "./App.css"
import NavBar from './component/NavBar';
import Home from "./component/Home";
import SocialLinks from "./component/SocialLinks";
import About from "./component/About";
import Projects from "./component/Projects";
import Skils from "./component/Skils";
import Contact from "./component/Contact";

export default function App() {

  return (

    <div> 
      
    <NavBar/>
    <Home/>
    <About/>
    <Projects/>
    <Skils/>
    <Contact/>
    <SocialLinks/>
    </div>
  );
}
