import React from 'react';
import './style.css';
import { Parallax, Background } from 'react-parallax';
import Particles from 'react-particles-js';


const particleOpt = {
  particles: {
    number: {
      value: 60, 
      density: {
        enable: true, 
        value_area: 800
      }
    },
    color: {
      value: "#ffffff", 
    }, 
  }
}

{/* <Particles param={particleOpt} /> */}

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
        <div style={{ height: '200px' }} />
        <div className="container">  
        <Particles param={particleOpt} />
       
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
