import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
 return (
    <div className="App">
      <h2>Hi ! I am React App </h2>
      <Person name="Arjun" age="23"/>
      <Person name="Ngawang Chokdup Lama" age="27">My Hobbies: Learning,Dancing etc</Person>
      <Person name="Piyush Pant" age="28"/>
    </div>
  );
  //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does This Works?'))
}
export default App;
