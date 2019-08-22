import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <img className="profile-img" src="https://www.pennington.com/-/media/Images/Pennington-NA/US/blog/Wild-Bird/Hummingbird-Moths/hummingbird-moth.jpg?h=599&la=en&w=800&hash=2AF0DE2BDAD4865FC2DE7D5D617157322D8E2B35"></img>
        <p>me the moth</p>
      </div>
    );
  }
}

export default Customers;
