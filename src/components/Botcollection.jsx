import React from 'react';
import BotCard from './BotCard';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Botcollection({ bots }) {
    
  const botCards = bots.map(bot => (
<Link to={`/bots/${bot.id}` }key={bot.id} > 
<BotCard bot={bot} />
</Link>
    
   
    
  ));

  return (
    <div className="bot-collection">
      {botCards}
    </div>
  );
}

export default Botcollection;
