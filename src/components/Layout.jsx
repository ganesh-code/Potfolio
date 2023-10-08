// import React from 'react'
import About from "./About";
import Certificate from "./Certificate";
import Education from "./Education";
import Navbar from "./Navbar";
import Landing from "./Profile";
import Social from "./Social";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";


const Layout = () => {

  // const [bg, setBg] = useState("light")
  // const [text, setText] = useState("dark")
  // setText("light")  
  // setBg("dark")
  return (
    <div className="m-5">
      <Navbar />
      <div className="row row-cols-1 row-cols-md-1 g-4">
        <About />
        <Landing  />
        <Social />
        <Education />
        <Certificate />
        <Projects />
        <Experience />
        <Skills />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
