import React, { useState } from 'react';
import Country from './components/Country';
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 1, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 2, bronze: 1 },
    { id: 3, name: "France", gold: 6, silver: 5, bronze: 4 },
  ]);

  const handleIncrement = (id, medalType) => {
    setCountries(countries.map(country =>
      country.id === id
        ? { ...country, [medalType]: country[medalType] + 1 }
        : country
    ));
  };

  const handleDecrement = (id, medalType) => {
    setCountries(countries.map(country =>
      country.id === id && country[medalType] > 0
        ? { ...country, [medalType]: country[medalType] - 1 }
        : country
    ));
  };

  const handleDelete = (id) => {
    setCountries(countries.filter((country) => country.id !== id));
  };

  const totalMedals = countries.reduce(
    (total, country) => total + country.gold + country.silver + country.bronze,
    0
  );

  return (
    <div className="app">
      <h1>Olympic Medals</h1>
      <h2>Total Medals: {totalMedals}</h2>
      <div className="medals">
        {countries.map((country) => (
          <Country 
            key={country.id} 
            country={country} 
            onDelete={handleDelete}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
