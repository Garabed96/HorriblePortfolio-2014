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
                  <div class="container">
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


                <Grid container spacing={24}>
                  <div id="portfolioBody">
                  <Grid item xs>
                    <div id="webmot"> hoverrrEnlarge
                          <Card id="cardID">
                          <img src={require("./../../images/webMoti.jpeg")} height="150" width="220" />

                            {/* <Image src='./../../images/webmotiIcon.jpg' /> */}
                            <Card.Content>
                              <Card.Header></Card.Header>
                              {/* <Card.Description>WebMoti is a robot intended to help children with 
                                autism enchance social, communication and interpersonal skills, while gaining self-esteem 
                                and managing their sensory environment.</Card.Description> */}
                          </Card.Content>
                          </Card>
                    </div>
                    </Grid>
                    <Grid item xs>
                    <div id="portPg"> hover
                          {/* ref=https://garabed96.github.io/ */}
                          {/* <Image src='./../../images/webmotiIcon.jpg' /> */}
                          <Card id="cardID2">
                          <img src={require("./../../images/webMoti.jpeg")} height="150" width="220" />
                            <Card.Content></Card.Content>
                          </Card>
                    </div>
                    </Grid>
                    <Grid item xs>
                    <div id="thirdThing">
                          {/* ref=https://garabed96.github.io/ */}
                          {/* <Image src='./../../images/webmotiIcon.jpg' /> */}
                          <Card id="cardID3">33333
                            <Card.Content></Card.Content>
                          </Card>
                    </div>
                    </Grid>
                  </div>
                </Grid>


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
