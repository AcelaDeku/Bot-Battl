
import React from 'react';
import { Link } from 'react-router-dom';

function BotCard({ bot }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>❤️: {bot.health}</p>
      <p>💀: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p><Link to={`/bots/${bot.id}`}>View</Link></p>
      <button>Add To Army</button>
    </div>
  );
}

export default BotCard;
