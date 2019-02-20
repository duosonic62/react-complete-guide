import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state  =  {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},
    ],
    otherState: 'some othe value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked!')
    // Dont do thisthis.state.persons[0].name = 'maxmilian';
    this.setState( {
      persons: [
          {name: 'Maximilian', age: 28},
          {name: 'Manu', age: 29},
          {name: 'Stephanie', age: 27},
        ] 
      } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a ReactApp</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies : racing.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].name}/>
      </div>
    );
  }
}

export default App;
