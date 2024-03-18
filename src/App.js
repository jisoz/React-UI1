import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { Glob, glob } from './component/Global';
import Home from './component/Home';
import Menucontent from './component/menucontent';
import Navbar from './component/Navbar';
import Projects from './component/projects';
import projects from './component/projects';

function App() {
  return (
    
   <>
  <Glob/>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
   
    </Routes>
   
    
   
    
    
   </>
  );
}

export default App;
