// components/YourBotArmy/YourBotArmy.js
import React from 'react';

const BotArmy = ({ army, onReleaseFromArmy }) => {
  const handleReleaseFromArmy = (bot) => {
    onReleaseFromArmy(bot);
  };

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="army-list">
        {army.map(bot => (
          <div key={bot.id} className="bot-card">
            <img src={bot.image} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => handleReleaseFromArmy(bot)}>Release</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotArmy;
