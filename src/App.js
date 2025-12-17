import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";

function App() {
  return (
    <div className='font-serif'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Work/>
      <Contact/>
    </div>

  );
}

export default App;
