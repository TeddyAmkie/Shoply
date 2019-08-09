import React, { Component } from 'react';
import Navbar from '../Navbar'
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
class App extends Component {
  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
