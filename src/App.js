import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: 'Category'
    };
    
    this.getFact = this.getFact.bind(this);
  }
  
  getFact() {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => {
      this.setState({fact: response.data.value});
    }).catch(error => {
      console.log(error);
    });
  }
  
  render() {
    return(
      <div className="container">
      <div className="row">
      
      <div className=" col-md-8 offset-md-2">
      <div className="card">
        <h1 className="title">Chucknorris Category Api</h1>
        <hr></hr>
       <small className="text-muted">
       <h4>{ this.state.fact }</h4>
       </small>
        </div>
        <hr></hr>
        <button type="button" 
          className="btn btn-success"
          onClick={this.getFact}>
          click to change category in card!
        </button>
        </div>
        </div>
      </div>
    );
  }
}
export default App;