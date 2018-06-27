import React from 'react';
import './style.css';
import { Parallax, Background } from 'react-parallax';

class Main extends React.Component {
  render() {
    return (
      <div>
      <Parallax
        blur={0}
        bgImage={require('../../images/atlas.jpg')}
        bgImageAlt="main image"
        strength={200}
      >
        Put some text content here
        or even an empty div with fixed dimensions
        to have a height for the parallax.
        <div style={{ height: '200px' }} />
        <div className="container"> 
        <div className="container_title"> 
              Hello, I'm Garo! 
          </div>
              
          <div className="container_text">    
              I am a Front End Developer / Computer Science
              student living in Toronto, ON.
          </div> 
          <div className="container_icons">
              <i class="fab fa-github fa-3x"></i> 
              <i class="fab fa-linkedin fa-3x"></i> 
          </div>
        </div>
          </Parallax>
      </div>
    );
  }
}

export default Main;
