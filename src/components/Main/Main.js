import React from 'react';
import './style.css';
import { Parallax, Background } from 'react-parallax';
import Particles from 'react-particles-js';


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
        <Particles 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          params={{
            number: {
              value: 60, 
              density: {
                enable: true, 
                value_area: 800
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
            }, 
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              polygon: {
                nb_sides: 7
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                }
              }
            },
            "retina_detect": true
          }}
        />
          <div className="container_title"> 
                Hello, I'm Garo! 
          </div>
              
          <div className="container_text">    
              Front End Developer | Computer Science
              Major | Location Toronto, ON.
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
