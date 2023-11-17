import Navbar from "./components/navbar";
import Herosection from "./components/heroSection";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {

  return (
    <>
    <Navbar/>
    <Herosection/>
   
      <Skills/>
      <Projects/>
    
    <Education/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App
