import React from 'react'
import '../App.css'

import { useState } from 'react';

function Calculator() {
  let expression, ans = useState(0);

  return (
    <div className = "window-body">
      <div className = "center-screen">
        <div className = "calc-body">
          <div>
            <p className = "calc-input"></p>
          </div>
          <div>
            <button className = "calc-button">1</button>
            <button className = "calc-button">2</button>
            <button className = "calc-button">3</button>
            <button className = "calc-button">0</button>
          </div>
          <div className = "calc-spacer"></div>
          <div>
            <button className = "calc-button">4</button>
            <button className = "calc-button">5</button>
            <button className = "calc-button">6</button>
            <button className = "calc-button">+</button>
          </div>
          <div className = "calc-spacer"></div>
          <div>
            <button className = "calc-button">7</button>
            <button className = "calc-button">8</button>
            <button className = "calc-button">9</button>
            <button className = "calc-button">-</button>
          </div>
          <div className = "calc-spacer"></div>
          <div>
            <button className = "calc-button">x</button>
            <button className = "calc-button">/</button>
            <button className = "calc-button">LB</button>
            <button className = "calc-button">RB</button>
          </div>
          <div className = "calc-spacer"></div>
          <div>
            <button className = "calc-button">=</button>
            <button className = "calc-button">B</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator;
