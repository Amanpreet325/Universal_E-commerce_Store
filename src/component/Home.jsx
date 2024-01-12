import { useEffect } from 'react';
import React from 'react'
import './util.css'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import video1 from '../assets/video1.mp4';
import download from '../assets/download.jpg';
import welding from '../assets/welding.jpg';
import kitchen from '../assets/kitchen.jpg';
import pharma from '../assets/pharma.jpg';
import innovative from '../assets/innovative.jpg'

const Home = () => {
  const handlePlay = () => {
    const video = document.getElementById('myVideo');
    if (video) {
      video.play();
    }
    
  };
    useEffect(() => {
      const mySwiper = new Swiper('.swiper', {
        grabCursor: true,
        speed: 500,
        effect: 'slide',
        loop: true,
        mousewheel: {
          invert: false,
          sensitivity: 1,
        },
      });
      
      // Optional: Enable Swiper
      mySwiper.enable();
      
    }, []);

  return (
    <>
    <div class="home" id='home'>
      <section>
      
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
          
            <video id="myVideo" src={video1} autoPlay  muted width='100%' height='auto'
                  type="video/mp4" onLoad={handlePlay}
                />
        
      
          </div>

          <div class="swiper-slide">
            <h1 class="title two">Grinding Expertise</h1>
            <img src={download} alt="" />
          </div>

          <div class="swiper-slide">
            <h1 class="title three">Welding Services</h1>
            <img src={welding} alt="" />
          </div>

          <div class="swiper-slide">
            <h1 class="title four">Modular Kitchen Fabrication</h1>
            <img src={kitchen} alt="" />
          </div>

          <div class="swiper-slide">
            <h1 class="title five">Pharmaceutical Steel Mastery</h1>
            <img src={pharma} alt="" />
          </div>

          <div class="swiper-slide">
            <h1 class="title six">Where Ideas Meet Steel</h1>
            <img src={innovative} alt="" />
          </div>
        </div>
      </div>
    </section>
 </div>
 
 </>
  )
}

export default Home