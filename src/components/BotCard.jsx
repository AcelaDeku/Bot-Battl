
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function BotCard({ bot }) {
    const {id} = useParams()
  return (
    <div className="bot-card-1">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      
    </div>
  );
}

export default BotCard;
