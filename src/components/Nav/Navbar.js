import React from 'react';
import './style.css';

class Navbar extends React.Component{
  render(){
    return(
      <div className="menu">
        <div className="menu_about">
          About Me         
        </div>
        <div className="menu_portfolio">
          Portfolio         
        </div>
        <div className="menu_contact"
            //  onClick={() => this.scrollToPage('.')}
        >
          Contact         
        </div>
       </div>
    );
  }
}

export default Navbar;