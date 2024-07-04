// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";

const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1>Contact Me</h1>
      <div className="contact-icon"
      data-aos="zoom-in-up"
      
      >
        <a href='https://www.instagram.com/' target='_blank' className="items"><FaInstagram className='icon' /></a>
        <a href='https://www.facebook.com/' target='_blank' className="items"><IoLogoFacebook className='icon'/></a>
        <a href='https://pk.linkedin.com/' target='_blank' className="items"><FaLinkedin className='icon'/></a>
        <a href='https://www.twitter.com' target='_blank' className="items"><FaSquareXTwitter className='icon'/></a>
        <a href='https://www.github.com' target='_blank' className="items"><FaSquareGithub className='icon'/></a>
        <a href='mailto:nazarfarid793@gmail.com' target='_blank' className="items"><MdOutgoingMail className='icon'/></a>

      </div>
    </div>
    
    
    </>
  )
}

export default Contact