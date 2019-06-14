import React from 'react';
import Navbar from './components/Nav/Navbar';
import Main from './components/Main/Main';
import About from './components/about/About';
import Section from "./components/Section.js";
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.
  // }
  render() {
    return (
      <div className="portfolio-landing-page">
        <div className="App">
          <Navbar />

          <Section 
            title="Main"
            subtitle={<Main/>}
            dark={true}
            id="Main"
          />

          <Section 
          title="About"
          subtitle={<About/>}
          dark={true}
          id="About"
        />

         <Section 
            title="Portfolio"
            subtitle={<Portfolio/>}
            dark={true}
            id="Portfolio"
          />

           <Section 
            title="Footer"
            subtitle={<Footer/>}
            dark={true}
            id="Footer"
          />
          <div>{ this.props.children }</div>
        </div>
      </div>
    );
  }
}

export default App;
