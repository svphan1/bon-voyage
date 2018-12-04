import React, { Component } from 'react';
import './App.css';
import BgVideo from './Components/BgVideo';
import Login from './Components/Login';
import MenuExampleBasic from './Components/NavBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <MenuExampleBasic /> */}
        <Login />
        <BgVideo />
      </React.Fragment>
    );
  }
}

export default App;
