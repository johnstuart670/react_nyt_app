import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          NYT Web Scraper - This time with React!
				</p>
				<p>This is a React Web Scraper demonstrating React.JS components in a short lifecycle, combined with webscraping headlines, descriptions and links from the NYT site.</p>
      </div>
    );
  }
}

export default App;
