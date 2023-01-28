import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './component/About';
import Banner from './component/Banner';
import Project from './component/Project';
import Skills from './component/Skills';
import Contact from './component/Contact';
function App() {
  return (
    <div className='font-serif'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
