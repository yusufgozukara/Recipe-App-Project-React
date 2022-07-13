import React from 'react';
import './About.css';
import coding from '../../assets/coding.svg';
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <div className="aboutBody">
      <Navbar/>
      <div className='aboutContainer'>
        <img src={coding} alt="coderMan" className='coderImg' />
        <h1>About Software Developer <span style={{fontSize:'1.3rem', color:'wheat'}}>Yusuf</span></h1>
        <div className='textDiv'>
          <h3>I'm Yusuf.</h3>
          <p>I'm currently learning Full-Stack Development Languages.</p>
          <p>I've already known JS, ReactJS, NodeJS, MongoDB, SQL, Python, Agile Methodologies.</p>
          <p><span>Send email</span> : yusufgozukara11@gmail.com</p>
        </div>

      </div>
    </div>
  )
}

export default About