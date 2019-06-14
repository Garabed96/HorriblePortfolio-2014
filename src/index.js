import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Container } from "semantic-ui-react";
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);


    // ReactDOM.render(
    //     <Router basename={process.env.PUBLIC_URL}>
    //         <App />
    //     </Router>, 
    //         document.getElementById('root'));
        