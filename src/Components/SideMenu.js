import React from 'react'
import '../App.css';

import { SideMenuItems } from './SideMenuItems';

function SideMenu() {
  return (
    <div className = "side-menu">
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
