import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../Assets/logo.png"
import "./style.css"
import {AiFillGithub,AiOutlineMail} from "react-icons/ai"
import {BsPersonLinesFill} from "react-icons/bs"
import {Link,NavLink} from "react-router-dom"




const Navb = () => {

    const expand = 'md';
  return (
    <>
    
  
        <Navbar  key={expand} style={{backgroundColor:"black"}} expand={expand} className=" navbar-dark my-0 py-0 shadow">
          <Container fluid className='nfluid'>
            <Navbar.Brand >
                <Link to="/">
                <img src={logo} alt="logo" style={{width:"200px"}} />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className="text-center " style={{backgroundColor:"#2f3e46"}}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  
                <img src={logo} alt="logo" style={{width:"200px"}} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end  flex-grow-1 pe-5">
                  
                  <Nav.Link className='fs-4 fw-light  mx-4'><NavLink className='aa ' to="about">About</NavLink></Nav.Link>
                  <Nav.Link className='fs-4 fw-light  mx-4' ><NavLink className='aa ' to="skills">Skills</NavLink></Nav.Link>
                  <Nav.Link className='fs-4 fw-light  mx-4' ><NavLink className='aa ' to="projects">Projects</NavLink></Nav.Link>
                  <Nav.Link className='fs-4 fw-light  mx-4' ><NavLink className='aa ' to="contact">Contact</NavLink></Nav.Link>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div className='navblc  '>
                <ul className='navbul'>
                  <a className='sidea' href="https://github.com/Aamil13?tab=repositories" target="_blank" rel="noreferrer noopener">
                    <li className='fs-4 navbl text-light pe-1 git' >Git <AiFillGithub size={30}/></li>
                  </a>

                  <a className='sidea' href="mailto: aamil.shafi13@gmail.com">
                    <li className='fs-5 navbl text-light pe-1 mail'>E-mail <AiOutlineMail className='' size={25}/></li>
                  </a>

                  <a className='sidea' href="https://drive.google.com/file/d/1mcjJ2AOWdgRyezKDYGWFfi510GF2UMQK/view?usp=share_link`" target="_blank" rel="noreferrer noopener">

                    <li className='fs-5  navbl text-light pe-1 resume'>Resume <BsPersonLinesFill className='ps-1' size={25}/></li>
                  </a>
                </ul>
            </div>
          </Container>
        </Navbar>
      
    </>
  )
}

export default Navb
