import React from 'react';
import Navbar from './components/Nav/Navbar';
import Main from './components/Main/Main';
import MyParallax from './components/parallax/MyParallax';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="portfolio-landing-page">
          <Navbar />   
          <Main />                     
          <MyParallax />
      </div>
    );
  }
}

export default App;
