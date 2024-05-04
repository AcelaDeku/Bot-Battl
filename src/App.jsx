import React, { useState, useEffect } from 'react';
import './App.css';
import Botcollection from './components/Botcollection';

import BotDetails from './components/BotDetails';
import { Routes,Route } from 'react-router-dom';
import BotArmy from './components/BotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);
  const handleAddToArmy = (bot) => {
    console.log("added")
    setArmy(prevArmy => [...prevArmy, bot]);
  };

  const handleReleaseFromArmy = (bot) => {
    console.log("click")
    setArmy(prevArmy => prevArmy.filter(item => item.id !== bot.id));
  };
  return (
    <div className="App">
    
    <BotArmy army={army} /> 
    <h1>Bot Army</h1>
    <Routes>
    <Route path='/' element={<Botcollection bots={bots}  />}/>
    <Route path='/bots/:id' element={<BotDetails bots={bots} handleAddToArmy={handleAddToArmy}/> }/>
    </Routes>
    
      
    </div>
  );
}

export default App;