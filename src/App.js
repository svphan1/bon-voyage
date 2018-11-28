import React, { Component } from 'react';
import './App.css';
import './Components/style.css';
import BgVideo from './Components/BgVideo';
import Login from './Components/Login';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Login />
        <BgVideo />
      </React.Fragment>
    );
  }
}

export default App;
