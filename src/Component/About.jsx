import React,{useEffect} from 'react'
import { GlitchText } from 'glitch-text';
import "./About.css"

const About = () => {
  
  return (
    <div className="w-100 Linearbg" >
      <div className="d-flex flex-column justify-content-center align-self-center h-100 w-100">
        <div class="container text-center">
          <div class="row ">
            <div class="col col-12 pb-5 h1 fw-bold fs-1"> Ab<span className='tt  m-0 p-0'>out</span></div>
            
            
          </div>
        </div>

        <div class="container text-center">
          <div class="row ">
            <div class="col col-12 col-md-6 pb-5 h1"><p><GlitchText theme='orange' text={"Hi , I'm Aamil, nice to meet you.Please take a look around."} /></p> </div>
            <div class="col"><p className='h4 text-light'> <GlitchText theme='white' text={'I am passionate about learning new technologies and to make software solution that can bring about a change in the lives of many in a positive sense however minuscule that may be. '} />
 </p></div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About