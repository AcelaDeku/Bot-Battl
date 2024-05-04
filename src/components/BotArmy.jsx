

import React from 'react';

const BotArmy = ({ army, handleReleaseFromArmy,deleteBot }) => {
  return (
    <div className="bot-army">
      <h1>Your Bot Army</h1>
      <div className="bot-card-container">
        {army.map(bot => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <div>
              <h3>{bot.name}</h3>
              <p>Class: {bot.bot_class}</p>
              <p>❤️: {bot.health}</p>
              <p>💀: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <button onClick={() => deleteBot(bot)} > X </button>
              <button onClick={() => handleReleaseFromArmy(bot)}>Release</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default BotArmy;
