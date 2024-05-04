
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BotDetails() {
  const { id } = useParams();
  const [bot, setBot] = useState([]);
 

  useEffect(() => {
    fetch(`http://localhost:3000/bots/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch bot details');
        }
        return response.json();
      })
      .then(data => setBot(data))

  }, [id]);

  

  if (!bot) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bot-details">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {/* Add any other details you want to display */}
    </div>
  );
}

export default BotDetails;
