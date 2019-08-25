import _ from 'lodash';
import React, { Component, Fragment } from 'react'
import { Parallax, Background } from 'react-parallax';
import { Button, Card, Divider, Image, Placeholder, Segment, Grid, Icon, Item } from 'semantic-ui-react';
import { Link, animateScroll as scroll } from "react-scroll";
import WebmotiCard from '../portfolioCards/WebmotiCard';
import ThieveryCard from '../portfolioCards/ThieveryCard';
import PortfolioProject from '../portfolioCards/PortfolioProject';

import './style.css';


// const cards = [
//   {
//     avatar: '/images/avatar/large/helen.jpg',
//     date: 'Joined in 2013',
//     header: 'Helen',
//     description: 'Primary Contact',
//   }
// ]

class Portfolio extends Component{
  state = {loading: false}
  
  // handleLoadingClick = () => {
  //   this.setState({ loading: true })

  //   setTimeout(() => {
  //     this.setState({ loading: false })
  //   }, 3000)
  // }
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  

  render(){
    const { loading } = this.state

    return(
      <div>
            <Parallax
              blur={{ min: -15, max: 15 }}
              bgImage={require('../../images/time.jpg')}
              bgImageAlt="the dog"
              strength={200}
            >
              <div style={{ height: '100px' }} />
              <div className="portfolio">
              <header>
              <h1>Portfolio</h1>



              </header>
                  <div class="containerPort">
                      <div class="item">
                          <WebmotiCard />

                      </div>
                      <div class="item">
                          <ThieveryCard />

                      </div>
                      <div class="item">
                      <PortfolioProject />

                  </div>
                  </div>

              <div id="footer">
                <div>
                  <Link
                    onClick={this.scrollToTop}
                  >
                    <i className="to-top"></i>
                  </Link>
                </div>
                <div id="toTawpMarg">Go Back to the Top</div>
                </div>
            </div>
            </Parallax>
          </div>
    )
  }
}

export default Portfolio;
