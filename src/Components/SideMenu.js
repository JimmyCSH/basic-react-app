import React from 'react'
import '../App.css';
import logo from "../basic-react-app-logo.png";

import { SideMenuItems } from './SideMenuItems';

function SideMenu() {
  return (
    <div className = "side-menu">
      <div>
        <img src = { logo } width={ 150 } className = "app-logo"></img>
      </div>
      <ul className = "side-menu-list">
        { SideMenuItems.map((val, key) => {
          return <li key = { key } onClick = {() => { window.location.pathname = val.link}} 
            className = "side-menu-row">
            <div>
              { val.title }
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}

export default SideMenu
