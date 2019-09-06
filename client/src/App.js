import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Skills from "./components/skills"
import Intro from "./components/intro"
import Works from "./components/works"

import './css/App.css';

function App(){

  const rootRender = () => {
    if(window.location.href.indexOf("/" + /\w/) === -1) {
      return true
      //to have temp base page
    }
  }
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <div className="nav-bar">
          <Router>
              <nav>
                <ul>

                <li><Link className="link" to="/intro/">Intro</Link></li>
                  <li><Link className="link" to="/skills/">Skills</Link></li>
                  <li><Link className="link" to="/works/">Works</Link></li>
                  <li><Link className="link" to="#">My Background</Link></li>
                </ul>
              </nav>

              
            <div className="main-body">

              <Route path="/works/" component={Works} />
              <Route path="/skills/" component={Skills} />
              <Route path="/intro/" component={Intro} />
            </div>

            </Router>
          </div>

        

      </div>
    );
}

export default App;
