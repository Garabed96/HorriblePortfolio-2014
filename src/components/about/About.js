import React from 'react'
import { Parallax, Background } from 'react-parallax';

const About = () => (
    <div>
      
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../../images/archblurbuildings.jpg')}
        bgImageAlt="the dog"
        strength={200}
      >
        Blur transition from min to max
        <div style={{ height: '400px' }} />
      </Parallax>
    </div>
  );

export default About;
