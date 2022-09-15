import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <>
        <div className='one'>
        <form method="POST" action='https://getform.io/f/ef97b302-e8a2-423f-af2d-d0e9c50319e4' class="form">
  <h2>CONTACT</h2>
  <p type="Name:"><input type="text" name='name' placeholder="Write your name here.."></input></p>
  <p type="Email:"><input type="email" name='email' placeholder="Let us know how to contact you back.."></input></p>
  <p type="Message:"><input name='message' placeholder="What would you like to tell us.."></input></p>
  <button>Send Message</button>
  
</form>
        </div>
    </>
  )
}

export default Contact