import React from 'react'
import { Parallax, Background } from 'react-parallax';
import './style.css';

const About = () => (
    <div>
      
      <Parallax
        blur={2}
        bgImage={require('../../images/archblurbuildings.jpg')}
        bgImageAlt="the dog"
        strength={200}
      >
      <div className="content">
      <header>
      <h1>About</h1>
      </header>
      <p>I enjoy programming in react and everything web</p>  
      <p> 
        My goal with building this site was to solidify my foundation in React. 
        I achieved this by using minimal UI Libraries and no framework and had fun throughout the 
        process.
      </p>
      <p>
          My favorite stack right now is React.js on the frontend and Node.js/MongoDB on the backend.
          I have also worked with Java, MySQL and Laravel(PHP)
      </p>
      </div>
      </Parallax>
    </div>
  );

export default About;


{/* <div className="content">
          <h1>About</h1>
          <p>I enjoy programming in React and everything web </p>
          <p>
            My favorite stack right now is React.js on the frontend and Node.js/MongoDB on the backend.
            I have also worked with Java, MySQL and Laravel(PHP)
          </p>
        </div> */}