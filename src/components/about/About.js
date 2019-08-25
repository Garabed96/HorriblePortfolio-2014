import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, animateScroll as scroll } from "react-scroll";

class About extends Component{
    state = {loading: false}
    //
    // scrollToTop = () => {
    //     scroll.scrollToTop();
    // };

    render(){
        const { loading } = this.state

        return(
        <div className="myAboutPage">
            <Route name="github" path="https://github.com/Garabed96" handler={About} />
            <Route name="linkedin" path="https://www.linkedin.com/in/garo-nazarian-712330119" handler={About} />
            <Parallax
                blur={2}
                bgImage={require('../../images/archblurbuildings.jpg')}
                bgImageAlt="the dog"
                strength={200}
            >
                <div style={{ height: '100px' }} />
                    <header>
                        <i  id="alignIcon">
                            <Link
                                to="Main"
                                spy={true}
                                smooth={true}
                                offset={-55}
                                duration={900}
                                onClick={this.scrollToTop}

                            >
                                <FontAwesomeIcon icon={faArrowUp} className="fa-2x" />

                            </Link>
                        </i>

                    </header>

                <div className="content">
                    <h1 id="centerMe">About</h1>
                    <p id="centerMe">
                        My name is Garo. Since beginning my journey as a software engineer nearly 5 years ago, I've done contract work for engineering firm, and collaborated
                        with talented people to create a product for consumer use.</p>
                    <p id="centerMe">
                        I'm a naturally curious individal, quick learner and always improving.
                    </p>
                    <p id="centerMe">
                        Currently I am working as a Software Developer at Ryerson University, we have built a robot with an video chat and voice call system
                        which helps students with disablilites learn while not able to attend class.
                    </p> <br/>
                    <div className="container_icons">
                        <a target="_blank" href="https://www.github.com/Garabed96" > <i className="fab fa-github fa-3x"></i> </a>
                        <a target="_blank" href="https://www.linkedin.com/in/garo-nazarian-712330119/" > <i className="fab fa-linkedin fa-3x"></i> </a>
                    </div>
                </div>

                <i  id="alignIcon">
                    <div>
                    </div>
                    <Link
                        activeClass="active"
                        to="Portfolio"
                        spy={true}
                        smooth={true}
                        offset={200}
                        duration={900}
                    >
                        <FontAwesomeIcon icon={faArrowDown} className="fa-2x" />
                    </Link>
                </i>
            </Parallax>
        </div>
    )
    }
}



export default About;


{/* <div className="content">
          <h1>About</h1>
          <p>I enjoy programming in React and everything web </p>
          <p>
            My favorite stack right now is React.js on the frontend and Node.js/MongoDB on the backend.
            I have also worked with Java, MySQL and Laravel(PHP)
          </p>
        </div> */}