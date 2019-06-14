import React from 'react';
import './style.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { Icon, Header } from 'semantic-ui-react';


class Navbar extends React.Component{
  // constructor(props) {
  //   super(props);

    // This binding is necessary to make `this` work in the callback
    //   this.handleClick = this.handleClick.bind(this);
  // }

  render(){
    return(
      <div id="navbar">
        <ul>
            <li>
              <Link 
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={70}
                duration={700}
              >
                About Me  
              </Link>   
            </li>
          <Icon name='home' size='tiny' />
            <li></li>
            <li>
              <Link 
                activeClass="active"
                to="Portfolio"
                spy={true}
                smooth={true}
                offset={450}
                duration={900}
              >
                Portfolio
              </Link>         
            </li>
            <li> 
              <a className="active" href="./contact">
                Contact
              </a>
            </li>
        </ul>
      </div>
    );
  }
}


export default Navbar;