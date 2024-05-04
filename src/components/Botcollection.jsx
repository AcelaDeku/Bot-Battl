

import React from 'react';
import BotCard from './BotCard';
import { useParams } from 'react-router-dom';

function Botcollection({ bots }) {
    const {id} = useParams()
  const botCards = bots.map(bot => (
    <BotCard key={bot.id} bot={bot} />
  ));

  return (
    <div className="bot-collection">
      {botCards}
    </div>
  );
}

export default Botcollection;
