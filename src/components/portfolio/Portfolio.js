import React from 'react'
import { Parallax, Background } from 'react-parallax';
import './style.css';

const Portfolio = () => (
    <div>
      
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../../images/time.jpg')}
        bgImageAlt="the dog"
        strength={200}
      >
        <div style={{ height: '800px' }} />
      </Parallax>
    </div>
  );

export default Portfolio;
