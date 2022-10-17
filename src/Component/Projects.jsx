import React from 'react'
import { Button } from 'react-bootstrap'
import netflix from "../Assets/netflix.png"
import chat from "../Assets/chat.png"
import anotes from "../Assets/anotes.png"
import landing from "../Assets/landing.png"
import searcher from "../Assets/searcher.png"
import pl from "../Assets/pl.png"
import Dashbaord from "../Assets/Dashboard.png"


import "./projects.css"

const Projects = () => {

    const data = [
        {img:Dashbaord,
        title: "Dashboard",
        description: "A Beautifull and Responsive Dashboard with Chart from ApexCharts and Animation using Framer-Motion and Lastly Table by MUI.",
        link: "https://dapper-chimera-d38628.netlify.app/",
        git:"https://github.com/Aamil13/GlassDashboard"},
        {img:pl,
            title: "Product Listing And Cart",
            description: "A fully functional Product Listing and Cart Page with sorting,filtering and searching functions.",
            link: "https://shopihy.netlify.app/",
            git:"https://github.com/Aamil13/Shopihy"},
        {img:landing,
            title: "Landing-Page",
            description: "Responsive Landing page",
            link:"https://beautiful-banoffee-b09631.netlify.app/",
        git:"https://github.com/Aamil13/1landingpage"},

        {img:netflix,
            title: "Netflix-Clone",
            description: "Clone of Netflix with sign-up and Log-In functionality using Firebase Auth Have used TMDB api to fetch and populate the genres. And lastlly have used Firebase cloud storage to save user Fav movies in Account page. TO add the topping it's Fully responsive.",
            link: "https://netflixclone13.netlify.app/",
            git: "https://github.com/Aamil13/netflixclonef/tree/master"
        },
        {img:anotes,
            title: "Advance Notes App",
            description: "Advanced Notes app with sorting , searching, priority function.",
            link:"https://subtle-rolypoly-d92d8b.netlify.app/",
            git: "https://github.com/Aamil13/Anotes"},
        {img:searcher,
             title: "Google Search clone",
             description: "Responsive Landing page",
            link:"https://fanciful-cuchufli-01165c.netlify.app/video",
            git:"https://github.com/Aamil13/Searcher" },
             {img:chat,
                title: "Chat App",
                description:"Chat app where anyone can join and chat. Have used Google Auth and Firebase for Auth and Backend." ,
                link: "https://dynamic-cuchufli-c32f60.netlify.app/" ,
                git: "https://github.com/Aamil13/chat1"
            },
    ]
  return (
    <>

<ul class="cards">
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
  
 
  
</ul>           
    </>
  );
}

export default Projects