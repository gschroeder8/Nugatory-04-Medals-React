import React from 'react';
import Medal from './Medals';

function Country({ country, handleIncrement, handleDecrement, onDelete }) {
  const { id, name, gold, silver, bronze } = country;

  return (
    <div className="country-card">
      <h2>{name}</h2>
      <div>
        <Medal
          medalType="gold"
          count={gold}
          countryId={id}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
        <Medal
          medalType="silver"
          count={silver}
          countryId={id}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
        <Medal
          medalType="bronze"
          count={bronze}
          countryId={id}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>
      <button className="mt-1" onClick={() => onDelete(id)}>🗑️</button>
    </div>
  );
}

export default Country;
