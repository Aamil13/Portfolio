import React from 'react'
import bt from "../Assets/bt.png"
import csslogo from "../Assets/csslogo.png"
import firebase from "../Assets/firebase.png"
import htlogo from "../Assets/htlogo.png"
import js from "../Assets/js.png"
import rlogo from "../Assets/rlogo.png"
import redux from "../Assets/redux.png"

import Card from 'react-bootstrap/Card'

const Skills = () => {
  return (
    <>
      <div
        className=" d-flex flex-column justify-content-center w-100 h-100"
        style={{  background: "#faedcd" }}
      >
        <div className="ms-5 pb-5">
          <h3 style={{textDecorationLine:"underline", textDecorationColor:"red"}}>Expirience</h3>
          <p>\\ These are the Technologies that I've worked with.</p>
        </div>

        <div className="pt-5">
          <div class="container text-center ">
            <div class="row ">
              <div class="col pt-2 ">
                <Card border="dark" style={{ width: "18rem" }} bg="warning">
                  <Card.Img variant="top" src={htlogo} />
                  <Card.Body>
                    <Card.Title>HTML</Card.Title>
                    <Card.Text>
                    The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div class="col pt-2">
              <Card border="dark" style={{ width: "18rem" }} bg="primary">
                  <Card.Img variant="top" src={csslogo} />
                  <Card.Body>
                    <Card.Title>CSS</Card.Title>
                    <Card.Text>
                    CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div class="col pt-2">
              <Card border="dark" style={{ width: "18rem" }} bg="warning">
                  <Card.Img variant="top" src={js} />
                  <Card.Body>
                    <Card.Title>JAVASCRIPT</Card.Title>
                    <Card.Text>
                    JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div class="col pt-2" >
              <Card border="danger" style={{ width: "18rem" }} bg="dark">
                  <Card.Img variant="top" src={bt} />
                  <Card.Body>
                    <Card.Title className='text-light'>BOOTSTRAP</Card.Title>
                    <Card.Text className='text-light '>
                    Bootstrap is a powerful, feature-packed frontend toolkit for building responsive, mobile-first websites with template starter page.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              
               
          </div>


          {/* .................... */}

          <div class="row mt-3">
              <div class="col pt-2">
                <Card border="dark" style={{ width: "18rem" }} bg="info">
                  <Card.Img variant="top" src={rlogo} />
                  <Card.Body>
                    <Card.Title>REACT</Card.Title>
                    <Card.Text>
                    React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div class="col pt-2">
              <Card border="danger" style={{ width: "18rem" }} bg="dark">
                  <Card.Img variant="top" src={redux} />
                  <Card.Body>
                    <Card.Title className='text-light'>REDUX</Card.Title>
                    <Card.Text className='text-light'>
                    Redux is an open-source JavaScript library for managing and centralizing application state.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div class="col pt-2">
              <Card border="danger" style={{ width: "18rem" }} bg="dark">
                  <Card.Img variant="top" src={firebase} />
                  <Card.Body>
                    <Card.Title className='text-light'>FIREBASE</Card.Title>
                    <Card.Text className='text-light'>
                    Firebase is a platform developed by Google for creating mobile and web applications.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              
              
               
          </div>





        </div>
      </div>
      </div>
    </>
  );
}

export default Skills