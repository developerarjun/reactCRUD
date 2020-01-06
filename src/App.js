import React,{ Component  } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state={
    persons:[
      {name: "Arjun",age: 23},
      {name: "Piyush",age: 28},
      {name: "manish",age: 32}
    ]
  }
render(){
 return (
    <div className="App">
      <h2>Hi ! I am React App </h2>
      <button>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Learning,Dancing etc</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );
  //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does This Works?'))
}
}
export default App;
