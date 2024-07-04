// eslint-disable-next-line no-unused-vars
import React from 'react'
import pdf from '../pdf/Resume.pdf';
import { useEffect } from 'react';
import { useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Welcome to my Profile", "My Name is NazarFarid"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container home" id='home'>
        <div className="left" 
          data-aos="fade-up-right"
        >
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="resume.pdf" className="btn btn-outline-warning my-3"> Download resume</a>
        </div>
        <div className="right">
          <div className="img"
            data-aos="fade-up-left"
          >
            <img src={`/public/images/Images/NazarIMG.jpeg`} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home