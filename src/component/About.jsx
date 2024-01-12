import React from 'react'
import about from '../assets/about.mp4'
import './util.css'
const About = () => {
    const handlePlay = () => {
        const video = document.getElementById('myVideo');
        if (video) {
          video.play();
        }
        
      };
  return (
    <>
    <div className='about-container' id='about'>
        <div className='about'>
        <video id="myVideo" src={about} autoPlay  muted width='100%' height='auto'
                  type="video/mp4" onLoad={handlePlay}
                />
        </div>
        
    </div>
    <div className='ti'><h3 className='titlee'>SHOP OUR PRODUCTS</h3></div>
    </> 
  )
}

export default About
