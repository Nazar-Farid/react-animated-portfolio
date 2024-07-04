import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Project from './Components/Projects';
import Contact from './Components/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {
useEffect(() => {
  Aos.init({ duration: 1000 });
 
}, [])

  return (
    
    < >
         <Navbar />
         <div className="container">
          <Home />
          <Experience />
          <Skills />
          <Project />
          <Contact />
         </div>
    </>
  )
}

export default App
