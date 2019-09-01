import React, { useState } from 'react';
import './scss/App.css';
import { Card, CardImg, CardHeader } from "shards-react";
import Customers from './components/customers';


function App() {
  const [user, setUser] = useState([
    {
      name: "Joe",
      email: "email@gmail.com",
      password: "1234567890"
    },
    {
      name: "Bobby",
      email: "email2@gmail.com",
      password: "1234567890"
    },
  ]);

  const addUser = input => {

  }

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

      <Card style={{maxWidth: "300px"}}>
        <CardHeader>ART #1</CardHeader>
        <CardImg className="card-img" src="https://art.art/wp-content/uploads/2019/05/mucha_500.jpg"/>
      </Card>
        


        <Customers />
      </div>
    );
  }


export default App;
