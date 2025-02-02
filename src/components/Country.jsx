import React, { useState } from 'react';
import Medal from './Medals';

function Country({ country, medals, onDelete }) {
  return (
    <div className="country-card">
      <h2 className="border-bottom pb-1">{country.name}</h2>
      <div>
        {medals.map(medal => (
          <Medal key={medal.id} medal={medal} />
        ))}
      </div>
      <button className="mb-1" onClick={() => onDelete(country.id)}>🗑️</button>
    </div>
  );
}

export default Country;