import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Botcollection (){
    const [bots, setBots] = useState([])

    useEffect (()=>{
        fetch("http://localhost:3000/bots")
        .then(r => r.json())
        .then(data => setBots(data) )
        .catch(error => console.error('Error fetching bots:', error))
        
    },[])
  
    return (
        <div>
            <h2>Bot collection</h2>
            {bots.map(bot => (
         <div key={bot.id}>
            <img src={bot.avatar_url}  />
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button>Add To Army</button>
            {/* <Link to={`/bots/${bot.id}`}>View Details</Link> */}
         </div>
        ))}
            
        </div>
    )
}
export default Botcollection
