import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../Assets/logo.png"
import "./style.css"
import {AiFillGithub,AiOutlineMail} from "react-icons/ai"
import {BsPersonLinesFill} from "react-icons/bs"
import {Link} from "react-router-dom"
import { GlitchText } from 'glitch-text';



const Navb = () => {

    const expand = 'md';
  return (
    <>
    
  
        <Navbar  key={expand} style={{backgroundColor:"black"}} expand={expand} className=" navbar-dark">
          <Container fluid>
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
                <Nav className="justify-content-center  flex-grow-1 pe-5">
                  <Nav.Link className='fs-4 mt-3 mx-4' ><Link className='aa' to="/">Home</Link></Nav.Link>
                  <Nav.Link className='fs-4 mt-3 mx-4'><Link className='aa' to="about">About</Link></Nav.Link>
                  <Nav.Link className='fs-4 mt-3 mx-4' ><Link className='aa' to="skills">Skills</Link></Nav.Link>
                  <Nav.Link className='fs-4 mt-3 mx-4' ><Link className='aa' to="projects">Projects</Link></Nav.Link>
                  <Nav.Link className='fs-4 mt-3 mx-4' ><Link className='aa' to="contact">Contact</Link></Nav.Link>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div className='navblc d-none d-sm-flex'>
                <ul className='navbul'>
                  <a href="https://github.com/Aamil13" target="_blank" rel="noreferrer noopener">
                    <li className='fs-4 navbl text-light pe-1' style={{background: '#000'}}>Git <AiFillGithub size={30}/></li>
                  </a>

                  <a href="mailto: aamil.shafi13@gmail.com">
                    <li className='fs-5 navbl text-light pe-1'style={{background: '#31087B'}}>E-mail <AiOutlineMail className='' size={25}/></li>
                  </a>

                  <a href="https://drive.google.com/file/d/1m44VZ4yn8C0FGXuxk7Nqx3VVIulBzMrl/view?usp=sharing" target="_blank" rel="noreferrer noopener">

                    <li className='fs-5  navbl text-light pe-1'style={{background: '#2B7A0B'}}>Resume <BsPersonLinesFill className='ps-1' size={25}/></li>
                  </a>
                </ul>
            </div>
          </Container>
        </Navbar>
      
    </>
  )
}

export default Navb