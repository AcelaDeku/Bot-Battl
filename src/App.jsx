import React, { useState, useEffect } from 'react';
import './App.css';
import Botcollection from './components/Botcollection';
import BotDetails from './components/BotDetails';
import { Router,Route } from 'react-router-dom';

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div className="App">
      <h1>Bot Army</h1>
    {/* <Router></Router> */}
      <Botcollection bots={bots} />
    </div>
  );
}

export default App;