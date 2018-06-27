import React from 'react'
import { Parallax, Background } from 'react-parallax';

const MyParallax = () => (
    <div>
      
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../../images/archblurbuildings.jpg')}
        bgImageAlt="the dog"
        strength={200}
      >
        Blur transition from min to max
        <div style={{ height: '500px' }} />
      </Parallax>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../../images/time.jpg')}
        bgImageAlt="the dog"
        strength={200}
      >
        Blur transition from min to max
        <div style={{ height: '500px' }} />
      </Parallax>
    </div>
  );

export default MyParallax;
