import React from 'react';
import './style.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { Icon, Header } from 'semantic-ui-react';
import { Parallax, Background } from 'react-parallax';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Main extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (

      <div className="main">
          <Parallax
              blur={1}
              bgImage={require('../../images/mainimg.jpg')}
              bgImageAlt="the dog"
              strength={200}
          >
        <div style={{ height: '100px' }} />
        <div className="container">

        <div className="containingAllText">
              <ul className="container_title">
                    Garo Nazarian
              </ul>
              
              <div className="container_text">
                      <ul className="homeSpacing">
                        Software Developer
                      </ul>
                      <ul className="homeSpacing">
                        Computer Science Major
                      </ul>
                      <ul className="homeSpacing">
                        Location Toronto, ON.
                      </ul>
              </div>
        </div>

        </div>
                  {/* <img id="alignIcon" src={require("./../../images/arrowDown.svg")}/> */}

          <div id="alignIcon">
          <div>
          </div>
              <Link 
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={70}
                duration={700}
              >
                  <FontAwesomeIcon id="arrows" icon={faArrowDown} className="fa-2x arrows" />
              </Link>   
          </div>
            {/*No documents are listed for this customer.*/}

      </Parallax>

      </div>
    );
  }
}

export default Main;
