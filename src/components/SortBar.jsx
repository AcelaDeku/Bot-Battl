import React from 'react';

const SortBar = ({ sortBots }) => {
  return (
    <div className="sort-bar-1">
      <button onClick={() => sortBots('health')}>Sort by Health</button>
      <button onClick={() => sortBots('damage')}>Sort by Damage</button>
      <button onClick={() => sortBots('armor')}>Sort by Armor</button>
      
    </div>
  );
};

export default SortBar;
