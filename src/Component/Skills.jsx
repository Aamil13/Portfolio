import React from 'react'
import bt from "../Assets/bt.png"
import csslogo from "../Assets/csslogo.png"
import firebase from "../Assets/firebase.png"
import htlogo from "../Assets/htlogo.png"
import js from "../Assets/js.png"
import rlogo from "../Assets/rlogo.png"
import redux from "../Assets/redux.png"
import './skills.css'


const Skills = () => {
  return (
    <>
      <div
        className=" d-flex flex-column justify-content-center w-100 "
        style={{  background: "white",height:"87vh" }}
      >
        <div className="ms-5 pb-5">
          <h3 style={{textDecorationLine:"underline", textDecorationColor:"red"}}>Expirience</h3>
          <p>\\ These are the Technologies that I've worked with.</p>
        </div>

        <div className="pt-5">
          <div class="container text-center ">
            <div class="row ">
              <div class="col pt-2 ">
                <div style={{width:"180px", height:"180px"}} className='bg-dark  rounded-circle d-flex justify-content-center align-items-center'>
                  <img className='hoverr' style={{width:"13rem" , height:"13rem",}} src={htlogo} alt="" />
                  
                </div>
                
              </div>
              <div class="col pt-2">
              
                <div  style={{width:"180px", height:"180px"}} className='bg-dark  rounded-circle d-flex justify-content-center align-items-center'>
                  <img className='hoverr' style={{width:"13rem" , height:"13rem"}} src={csslogo} alt="" />
                  
                </div>
              </div>
              <div class="col pt-2">
              <div style={{width:"180px", height:"180px"}} className='bg-dark  rounded-circle d-flex justify-content-center align-items-center'>
                  <img  className='hoverr' style={{width:"13rem" , height:"13rem"}} src={js} alt="" />
                  
                </div>
              </div>
              <div class="col pt-2" >
              <div style={{width:"180px", height:"180px"}} className='bg-dark  rounded-circle d-flex justify-content-center align-items-center'>
                  <img className='hoverr' style={{width:"13rem" , height:"13rem"}} src={bt} alt="" />
                  
                </div>
              </div>
              
               
          </div>


          {/* .................... */}

          <div class="row mt-3">
              <div class="col pt-2">
              <div style={{width:"180px", height:"180px"}} className='bg-dark  rounded-circle d-flex justify-content-center align-items-center'>
                  <img className='hoverr' style={{width:"13rem" , height:"13rem"}} src={firebase} alt="" />
                  
                </div>
              </div>
              <div class="col pt-2">
              <div style={{width:"180px", height:"180px"}} className='bg-dark  rounded-circle d-flex justify-content-center align-items-center'>
                  <img className='hoverr' style={{width:"13rem" , height:"13rem"}} src={rlogo} alt="" />
                  
                </div>
              </div>
              <div class="col pt-2">
              <div style={{width:"180px", height:"180px"}} className='bg-dark  rounded-circle d-flex justify-content-center align-items-center'>
                  <img className='hoverr' style={{width:"13rem" , height:"13rem"}} src={redux} alt="" />
                  
                </div>
              </div>
              
              
               
          </div>





        </div>
      </div>
      </div>
    </>
  );
}

export default Skills