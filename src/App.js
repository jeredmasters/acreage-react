// Vendor
import React, { Component } from 'react';

// Containers
import Map from 'containers/Map'
import Header from 'containers/Header'
import Navigation from 'containers/Navigation'

// Styles
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Navigation/>
        <Map/>
      </div>
    );
  }
}

export default App;
