
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BotDetails({bots}) {
  const { id } = useParams();
  const [bot, setBot] = useState([]);
 

  useEffect(() => {
  
    fetch(`http://localhost:3000/bots/${id}`)
      .then(response => response.json())
      .then(data => {
        setBot(data);
       
      })
   
  }, []); 
  console.log(bot)

 

  return (
    <div className="bot-details">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
    
    </div>
  );
}

export default BotDetails;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function BotDetails({bots}) {
//   const { id } = useParams();
//   const [bot, setBot] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBotDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/bots/${id}`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch bot details (HTTP ${response.status})`);
//         }
//         const data = await response.json();
//         setBot(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchBotDetails();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!bot) {
//     return <div>Bot not found</div>;
//   }

//   return (
//     <div className="bot-details">
//       <img src={bot.avatar_url} alt={bot.name} />
//       <h3>{bot.name}</h3>
//       <p>Class: {bot.bot_class}</p>
//       <p>Health: {bot.health}</p>
//       <p>Damage: {bot.damage}</p>
//       <p>Armor: {bot.armor}</p>
//     </div>
//   );
// }

// export default BotDetails;
// 