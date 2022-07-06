import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard_component';

let peopleArr = [
  {"firstName": "Eren", "lastName": "Yeager", "age": 16, "hairColor": "Brown"},
  {"firstName": "Reiner", "lastName": "Braun", "age": 16, "hairColor": "Blonde"},
  {"firstName": "Mikasa", "lastName": "Ackermann", "age": 16, "hairColor": "Black"},
  {"firstName": "Armin", "lastName": "Arlert", "age": 16, "hairColor": "Blonde"}
]

function App() {
  return (
    <div className="App">
      {peopleArr.map(person => {
        return <PersonCard firstName = {person.firstName} lastName = {person.lastName} age = {person.age} hairColor = {person.hairColor} />
      })
      }
    </div>
  );
}

export default App;
