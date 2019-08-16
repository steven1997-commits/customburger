import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './containers/layout/layout';
import Builder from './containers/builder/builder';
import Checkout from './containers/checkout/checkout';
import Orders from './containers/orders/Orders';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/" component={Builder} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
