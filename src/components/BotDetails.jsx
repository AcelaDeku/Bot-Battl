
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BotDetails({bots }) {
  const { id } = useParams();
  const [bot, setBot] = useState([]);
  const [army, setArmy] = useState([])

  useEffect(() => {
  
    fetch(`http://localhost:3000/bots/${id}`)
      .then(response => response.json())
      .then(data => {
        setBot(data);
       
      })
   
  }, []); 
 

  const handleAddToArmy = (bot) => {
    console.log("added")
    setArmy(prevArmy => [...prevArmy, bot]);
  };
console.log(army)
  return (
    <div className="bot-details">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>{bot.catchphrase}</p>
      <p>❤️: {bot.health}</p>
      <p>💀: {bot.damage}</p>
     <p>Armor: {bot.armor}</p>
     <button> <Link to={"/"}>Back</Link></button>
    
      <button onClick={handleAddToArmy}>Add To Army</button>
    </div>
  );
}

export default BotDetails;
