import axios from 'axios';
import { response } from 'msw';
import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [charInfo, setCharInfo] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    useEffect(() => {
      axios.get('https://swapi.dev/api/people')
        .then(response => {
          // console.log(response.data);
          setCharInfo(response.data)
        })
        .catch(err => {
          console.error(err)
        });
    },[]
    );


  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    {charInfo.map(eachChar => {
      return <Character key = {eachChar.id} info = {eachChar}/>
  })
}
    </div>
    );
}

export default App;
