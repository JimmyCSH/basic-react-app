import React from 'react'
import '../App.css';

import  { useState } from 'react';

function Counter() {
  const [val, setVal] = useState(0);

  const increment = () => {
    setVal(val => val + 1);
  };

  const decrement = () => {
    setVal(val => val - 1);
  };

  return (
    <div className = "window-body">
      <div className = "center-screen">
          <button className = "inc-dec" onClick = { decrement }>-</button>
          <div className = "spacer"></div>
          <h2>{ val }</h2>
          <div className = "spacer"></div>
          <button className = "inc-dec" onClick = { increment }>+</button>
      </div>
    </div>
  );
}

export default Counter;
