import React, { useEffect,useState } from 'react'
import "./Nav.css";
const Nav = () => {
  
  return (
    <div className="nav nav_black">
        <img className="nav_logo"
         src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netfix Logo"
        />
        <img className="nav_avtar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Ntefix Avtar"
         />
    </div>
  )
}

export default Nav