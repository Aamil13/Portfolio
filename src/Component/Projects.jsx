import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import netflix from "../Assets/netflix.png"
import anotes from "../Assets/anotes.png"
import landing from "../Assets/landing.png"
import merngoals from "../Assets/merngoals.png"
import pl from "../Assets/pl.png"
import Dashbaord from "../Assets/Dashboard.png"


import reactlogo from "../Assets/rlogo.png"
import bootstrap from "../Assets/bt.png"
import firebase from "../Assets/firebase.png"
import mongo from "../Assets/mongo.png"
import node from "../Assets/node.png"
import redux from "../Assets/redux.png"
import express from "../Assets/express.png"
import sass from "../Assets/sass.png"
import framerm from "../Assets/framerm.png"


import "./projects.css"

const Projects = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

    const data = [
      {img:merngoals,
        title: "Full-Stack Goal App",
        description: "Mern Stack Goals App with user Registration and Authorization with JWT",
        link: "https://concerned-life-jacket-fox.cyclic.app/",
        git:"https://github.com/Aamil13/Mern-GoalApp",
          stack:[mongo,express,reactlogo,node,redux,bootstrap]
      },
        {img:Dashbaord,
        title: "Dashboard",
        description: "A Beautifull and Responsive Dashboard with Chart from ApexCharts and Animation using Framer-Motion and Lastly Table by MUI.",
        link: "https://dapper-chimera-d38628.netlify.app/",
        git:"https://github.com/Aamil13/GlassDashboard",
          stack:[reactlogo,sass,framerm]
      },
        {img:pl,
            title: "Product Listing And Cart",
            description: "A fully functional Product Listing and Cart Page with sorting,filtering and searching functions.",
            link: "https://shopihy.netlify.app/",
            git:"https://github.com/Aamil13/Shopihy",
            stack:[reactlogo,bootstrap]},
        {img:landing,
            title: "Landing-Page",
            description: "Responsive Landing page",
            link:"https://beautiful-banoffee-b09631.netlify.app/",
        git:"https://github.com/Aamil13/1landingpage",
        stack:[reactlogo,bootstrap]},

        {img:netflix,
            title: "Netflix-Clone",
            description: "Clone of Netflix with sign-up and Log-In functionality using Firebase Auth Have used TMDB api to fetch and populate the genres.",
            link: "https://netflixclone13.netlify.app/",
            git: "https://github.com/Aamil13/netflixclonef/tree/master",
            stack:[reactlogo,bootstrap,firebase]
          },
        {img:anotes,
            title: "Advance Notes App",
            description: "Advanced Notes app with sorting , searching, priority function.",
            link:"https://subtle-rolypoly-d92d8b.netlify.app/",
            git: "https://github.com/Aamil13/Anotes",
            stack:[reactlogo,bootstrap]
          },
        
    ]
  return (
    <>

   <div className='Project-container'>
   {data.map((item,idx)=>(
    <div className='Container' data-aos={idx % 2 === 0 ? 'fade-left' : 'fade-right'} >
    <div className='left-side'>
      <img src={item.img} alt="" />
        <div className='btt'>
        <a href={item.git} target="_blank" rel="noreferrer noopener" >
          <button className='btn btn-dark'>Git</button>
          </a>

          <a href={item.link} target="_blank" rel="noreferrer noopener" >
          <button className='btn btn-success'>Live</button>
          </a>
        </div>
    </div>
    <div className='right-side'>
      <h3 className='mt-2 w-100 text-center'>{item.title}</h3>
        <p className='w-75 text-center pp'>{item.description}</p>
        <div className='stholder'>
          <p className='fw-bold pb-1'>Stack:</p>
          <span className='stack'>
            {item.stack.map((im,id)=>(
              <img src={im} key={id} alt="" />
            ))}
            
          </span>
          
        </div>
       
    </div>
</div>
   ))}
   </div>














{/* <ul class="cards">
    {data.map((item,idx)=>(
        <li key={idx}>
        <div class="card">
          <img src={item.img} class="card__image" alt="" />
          <div class="card__overlay">
            <div class="card__header">
                              
             
              <div class="card__header-text">
                <h3 class="card__title">{item.title}</h3>            
                <span class="card__status"> <a href={item.link} target="_blank" rel="noreferrer noopener" >
                    <Button className='btn-success'>Demo</Button>
                    </a>
                    <a href={item.git} target="_blank" rel="noreferrer noopener">
                            
                            <Button className='btn-dark me-3'>GitHub</Button>
                                </a></span>
              </div>
            </div>
            <p class="card__description">{item.description}</p>
          </div>
        </div>      
      </li>
    ))}
  
 
  
</ul>            */}
    </>
  );
}

export default Projects