import React from 'react';

import Home from './Component/Home';
import Navb from './Component/Navb';
import Skills from './Component/Skills';
import Contact from './Component/Contact';
import About from './Component/About';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Projects from './Component/Projects';



function App() {
  return (
    <>
    <BrowserRouter>

   <Navb/>

   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
   
   </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
