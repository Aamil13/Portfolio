import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import bt from "../Assets/bt.png"
import csslogo from "../Assets/csslogo.png"
import sasslogo from "../Assets/sass.png"
import firebase from "../Assets/firebase.png"
import htlogo from "../Assets/htlogo.png"
import js from "../Assets/js.png"
import rlogo from "../Assets/rlogo.png"
import redux from "../Assets/redux.png"
import express from "../Assets/express.png"
import node from "../Assets/node.png"
import mongo from "../Assets/mongo.png"
import './skills.css'






const Skills = () => {
  let skillArr = [htlogo, csslogo, sasslogo, js,  bt, firebase, rlogo, redux, node, express, mongo]


  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  
  const SkillCol = ({img,idx}) =>{
    return <div class=" col-lg-2 col-md-3 col-sm-6 col-6 p-4 mb-5" data-aos={idx % 2 === 0 ? 'flip-right' : 'fade-right'} >
    <div  className=' img rounded-circle d-flex justify-content-center align-items-center'>
        <img className='hoverr ' style={{width:"13rem" , height:"13rem",borderRadius:"50%"}} src={img} alt="" />
        
      </div>
    </div>
  }



  return (
    <>
      <div
        className="  w-100 "
        style={{  background: "black",height:"92.4vh" }}
      >
        <div className="ms-5 pb-5">
          <h3 style={{textDecorationLine:"underline", textDecorationColor:"red",color:"white"}}>Experience</h3>
          <p className='text-light'>\\ These are the Technologies that I've worked with.</p>
        </div>

        <div className="pt-5 imglogo">
          <div class="container text-center ">
            <div className='row justify-content-center align-items-center mx-0 px-0 align-items-center'>
            {skillArr.map((item, idx)=>(
              <SkillCol img={item} idx={idx} key={idx} />
            ))}
            </div>





        </div>
      </div>
      </div>
    </>
  );
}

export default Skills

