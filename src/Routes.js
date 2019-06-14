import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import App from './App';
import ContactMe from './ContactMe';
export default function Routes() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/contact" component={ContactMe} />
          <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
      </BrowserRouter>
  );
}