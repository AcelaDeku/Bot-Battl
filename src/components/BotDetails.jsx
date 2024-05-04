
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function BotDetails({bots, handleAddToArmy }) {
  const { id } = useParams();
  const [bot, setBot] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch(`http://localhost:3000/bots/${id}`)
  .then(response => response.json())
  .then(data => {
    setBot(data);
   
  })

}, []); 


  return (
    <div className="bot-details">
     
        <>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <p>{bot.catchphrase}</p>
          <p>❤️: {bot.health}</p>
          <p>💀: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button><Link to="/">Back</Link></button>
         
          <button onClick={() => handleAddToArmy(bot)}>Add To Army</button>
        </>
      
    </div>
  );
}

export default BotDetails;
