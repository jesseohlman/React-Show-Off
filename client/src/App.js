import React, { Component } from 'react';
import './scss/App.css';
import Customers from './components/customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Show Off</h1>
        </header>

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Teleport</a></li>
            <li><a href="#">Anthem</a></li>
          </ul>
        </nav>

        <div className="panel-1">@@@</div>
        <div className="panel-2">#@@</div>
        <div className="panel-3">##@</div>
        <div className="panel-4">###</div>
        <div className="panel-5">@##</div>


        <Customers />
      </div>
    );
  }
}

export default App;
