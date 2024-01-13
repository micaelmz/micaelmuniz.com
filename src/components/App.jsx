import React from 'react';
import '../index.css';
import ParallaxSection from "./ParallaxSection";
import {ParallaxProvider} from 'react-scroll-parallax';
import {TextGlitchEffect} from 'react-text-glitch-effect';

function App() {
  return (
      <ParallaxSection />
  );
}

export default App;