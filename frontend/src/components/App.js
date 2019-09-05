import React, { Component } from 'react';
import Navbar from '../Navbar'
import { BrowserRouter } from 'react-router-dom';
import { Elements, StripeProvider } from 'react-stripe-elements';
import Routes from '../Routes';
class App extends Component {
  render() {
    return (
      <div className="App" >
        <StripeProvider apiKey="pk_test_lQa4CsK6zmkSZztiLm1P1C4600Ftwrsnuw">
          <Elements>
            <BrowserRouter>
              <Navbar />
              <Routes />
            </BrowserRouter>
          </Elements>
        </StripeProvider>
      </div >
    );
  }
}

export default App;
