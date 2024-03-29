import {ParallaxBanner, ParallaxBannerLayer, ParallaxProvider} from 'react-scroll-parallax';
import React from 'react';



export default function ParallaxSection() {
  return (
      <ParallaxProvider>
        <ParallaxBanner style={{aspectRatio: '16 / 9'}}>
          <ParallaxBannerLayer image={require('../assets/img/parallax/5.png')} speed={0}/>
          <ParallaxBannerLayer image={require('../assets/img/parallax/0.png')} speed={-20} opacity={[0.3, 1]}/>
          <ParallaxBannerLayer image={require('../assets/img/parallax/1111.png')} speed={-15}/>
          <ParallaxBannerLayer image={require('../assets/img/parallax/99.png')} speed={6}/>
          <ParallaxBannerLayer image={require('../assets/img/parallax/2.png')} speed={6}/>
          <ParallaxBannerLayer image={require('../assets/img/parallax/3.png')} speed={8}/>
          <ParallaxBannerLayer image={require('../assets/img/parallax/6.png')} speed={0}/>
          <ParallaxBannerLayer>
            <h1>My Headline</h1>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </ParallaxProvider>
  );
};