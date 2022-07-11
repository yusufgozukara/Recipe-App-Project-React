import React from 'react';
import './About.css';
import coding from '../../assets/coding.svg';

const About = () => {
  return (
    <div className="aboutBody">
      <div className='aboutContainer'>
        <img src={coding} alt="coderMan" className='coderImg' />
        <h2>About Software Developer <span>ED BEN</span></h2>
        <div className='textDiv'>
          <h3>I'm Ed.</h3>
          <p>I'm currently learning Full-Stack Development Languages.</p>
          <p>I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB, SQL, Python, AWS Services.</p>
          <p><span>Send email</span> : edwardbenedict92@gmail.com</p>
        </div>

      </div>
    </div>
  )
}

export default About