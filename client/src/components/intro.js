import React, { Component, useState } from 'react';


function Intro() {
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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Intro</h1>
        </header>



      </div>
    );
  }


export default Intro;
