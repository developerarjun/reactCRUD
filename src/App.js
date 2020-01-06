import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
 return (
    <div className="App">
      <h2>Hi ! I am React App </h2>
      <Person />
    </div>
  );
  //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Does This Works?'))
}
export default App;
