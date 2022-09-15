import React from 'react'
import { Button } from 'react-bootstrap'
import netflix from "../Assets/netflix.png"
import chat from "../Assets/chat.png"
import anotes from "../Assets/anotes.png"
import landing from "../Assets/landing.png"

import "./projects.css"

const Projects = () => {
  return (
    <>
      <div className="w-100 h-100 bg-dark">
        <div className="text-center">
          <h3 className="pt-5">Projects</h3>
          <p>Some of the project i've made.</p>
        </div>

        <div class=" text-center  mm  bg-dark" >
          <div class="row gap-4 gap-xxl-4"  >
            <div class="col col-12 col-md-4  bgi "  style={{backgroundImage:`url(${netflix})`}}>
                <div className='bgi2 h-100 w-100 text-light'>
                    <h4 className='pt-3 text-danger'>
                        Netflix Clone
                    </h4>
                    <p>Clone of Netflix with sign-up and Log-In functionality using <span className='text-warning'>Firebase Auth </span>
                         Have used TMDB api to fetch and populate the genres.
                        And lastlly have used <span className='text-warning'>Firebase cloud storage</span> to save user Fav movies in Account page.
                            TO add the topping it's Fully responsive.
                            
                        
                    </p>
                    <div className=' d-flex justify-content-evenly'>
                        <a href="https://github.com/Aamil13/netflixclonef/tree/master" target="_blank" rel="noreferrer noopener">
                            
                    <Button className='btt'>GitHub</Button>
                        </a>
                        <a href="https://superlative-gelato-4ee981.netlify.app" target="_blank" rel="noreferrer noopener" >
                    <Button>Demo</Button>
                    </a>
                    </div>
                </div>
            </div>



            
            
            <div class="col bgi col-12 col-md-4 "  style={{backgroundImage:`url(${chat})`}}>
                <div className='bgi2 h-100 w-100 text-light'>
                    <h4 className='pt-3 text-danger'>
                        Chat app
                    </h4>
                    <p>Chat app where anyone can join and chat. Have used Google Auth and Firebase for Auth and Backend.
                            
                        
                    </p>
                    <div className=' d-flex justify-content-evenly'>
                    <a href="https://github.com/Aamil13/chat1" target="_blank" rel="noreferrer noopener">
                            
                    <Button className='btt'>GitHub</Button>
                        </a>
                        <a href="https://dynamic-cuchufli-c32f60.netlify.app/" target="_blank" rel="noreferrer noopener" >
                    <Button>Demo</Button>
                    </a>
                    </div>
                </div>
            </div>
            



          
            
            <div class="col bgi col-12 col-md-4  "  style={{backgroundImage:`url(${anotes})`}}>
                <div className='bgi2 h-100 w-100 text-light'>
                    <h4 className='pt-3 text-danger'>
                        Advanced Notes app
                    </h4>
                    <p>Advanced Notes app with sorting , searching, priority function.
                            
                        
                    </p>
                    <div className=' d-flex justify-content-evenly'>
                    <a href="https://github.com/Aamil13/Anotes" target="_blank" rel="noreferrer noopener">
                            
                    <Button className='btt'>GitHub</Button>
                        </a>
                        <a href="https://subtle-rolypoly-d92d8b.netlify.app/" target="_blank" rel="noreferrer noopener" >
                    <Button>Demo</Button>
                    </a>
                    </div>
                </div>
            </div>

            <div class="col bgi col-12 col-md-4  "  style={{backgroundImage:`url(${landing})`}}>
                <div className='bgi2 h-100 w-100 text-light'>
                    <h4 className='pt-3 text-danger'>
                        Landing Page
                    </h4>
                    <p>
                       Responsive Landing Page.     
                        
                    </p>
                    <div className=' d-flex justify-content-evenly'>
                    <a href="https://github.com/Aamil13/1landingpage" target="_blank" rel="noreferrer noopener">
                            
                    <Button className='btt'>GitHub</Button>
                        </a>
                        <a href="https://beautiful-banoffee-b09631.netlify.app/" target="_blank" rel="noreferrer noopener" >
                    <Button>Demo</Button>
                    </a>
                    </div>
                </div>
            </div>









            </div>
            </div>
            </div>
          
       
    
    </>
  );
}

export default Projects