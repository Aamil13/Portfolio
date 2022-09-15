import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div
        className="w-100"
        style={{ height: "87vh", backgroundColor: "#354f52" }}>
        
        <div className='text-sm-center d-flex flex-column justify-content-center  h-100 w-100 ps-5'>
            <h6 className=' m-0 '>Hi, My name is</h6>
            <h3 className='text-danger m-0 h2'>Mohd Aamil Shafi</h3>
            <h3 className='text-light m-0'>I'm a React Js Developer</h3>
            <h6 className='text-light m-0 mt-1 mb-4 '>Currentlly focused on gaining industry experience.</h6>
            <div className='d-flex justify-content-center'>
              <Link to="/projects">

                <button className='btn-dark text-light'>View Work</button>
              </Link>
            </div>
        </div>
           
      </div>
    </>
  );
}

export default Home