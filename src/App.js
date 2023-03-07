import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


function App() {
  return (
    <div >
      <Navbar /> 
      <About/>
      <AboutMe/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
