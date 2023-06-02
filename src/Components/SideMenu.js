import React from 'react'
import '../App.css';
import logo from "../basic-react-app-logo.png";

import { Link } from 'react-router-dom';

import { SideMenuItems } from './SideMenuItems';

function SideMenu() {
  return (
    <div className = "side-menu">
      <div>
        <img src = { logo } width={ 150 } className = "app-logo"></img>
      </div>
      <ul className = "side-menu-list">
        { SideMenuItems.map((val, key) => {
          return  (
            <li key = { key }>
              <Link to = { val.link } 
                className = "link-text">
                <div className = "side-menu-row" id = { window.location.pathname == val.link ? "active" : "" }>
                  { val.title }
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default SideMenu
