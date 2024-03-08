import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {

  // Modifiez la fonction pour accepter l'événement de clic et empêcher l'événement par défaut
  const openTrailer = (e) => {
    e.preventDefault(); // Empêche l'événement par défaut (la navigation)
    window.open("https://www.youtube.com/watch?v=OycYHUdAWfQ&ab_channel=FlorianReichelt", "_blank");
  };

  return (
    <div className='hero-container'>
      <video src='/videos/Morocco in Motion _ Travel Video.mp4' autoPlay loop muted />
      <h1>ADVENTURE in MOROCCO</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={(e) => openTrailer(e)} // Passez l'événement de clic à openTrailer
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
