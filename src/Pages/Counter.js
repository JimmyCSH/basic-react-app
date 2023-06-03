import React from 'react'
import '../App.css';

import  { useState } from 'react';

function Counter() {
  return (
    <div className = "window-body">
      <div className = "center-screen">
          <button className = "inc-dec">-</button>
          <div className = "spacer"></div>
          <h2>Counter</h2>
          <div className = "spacer"></div>
          <button className = "inc-dec">+</button>
      </div>
    </div>
  );
}

export default Counter;
