
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function BotDetails({ bots, handleAddToArmy,deleteBot }) {
  const { id } = useParams();
  const [bot, setBot] = useState({});
  const [addedToArmy, setAddedToArmy] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/bots/${id}`)
      .then(response => response.json())
      .then(data => {
        setBot(data);
      })
      .catch(error => {
        console.error('Error fetching bot details:', error);
      });
  }, [id]);

  const addToArmy = () => {
    if (!addedToArmy) {
      handleAddToArmy(bot);
      setAddedToArmy(true); 
    }
  };

  return (
    <div className="bot-detail">
       <h2>Bot Details</h2>
      <img src={bot.avatar_url} alt={bot.name} />
     
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>{bot.catchphrase}</p>
      <p>❤️: {bot.health}</p>
      <p>💀: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <Link to="/"className="back-link">Back</Link>
      <button onClick={addToArmy} disabled={addedToArmy}>
        {addedToArmy ? "Checked Out" : "Add To Army"}
      </button>
    </div>
  );
}

export default BotDetails;
