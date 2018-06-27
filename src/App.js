import React from 'react';
import Navbar from './components/Nav/Navbar';
import Main from './components/Main/Main';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="portfolio-landing-page">
          <Navbar />   
          <Main />                     
          <About />
          <Portfolio />
      </div>
    );
  }
}

export default App;
