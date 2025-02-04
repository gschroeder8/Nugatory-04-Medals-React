import React from 'react';

function Medal({ medalType, count, countryId, handleIncrement, handleDecrement }) {
  return (
    <div className="medal">
      <p>{medalType.charAt(0).toUpperCase() + medalType.slice(1)}: {count}</p>
      <button onClick={() => handleIncrement(countryId, medalType)}>+</button>
      <button
        onClick={() => handleDecrement(countryId, medalType)}
        disabled={count <= 0}
      >
        -
      </button>
    </div>
  );
}

export default Medal;
