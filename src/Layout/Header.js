import React from 'react'

// import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { atom, useAtom } from "jotai"
import Dropdown from 'react-bootstrap/Dropdown';

// CSS 
import '../CSS/Layout.css';

// MEDIA FOTO
import fi_menu from '../Assets/Media/fi_menu.png';
import Group15 from '../Assets/Media/Group15.png';


export const showNavAtom = atom(true)

const Header = () => {
    const [showNav, setShowNav] = useAtom(showNavAtom)

     // LOGOUT FUNCTION
    const navigate = useNavigate()
    const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
  return (

  

  <div className="header header-container">
    <div className="header-left header-center">
      <div className="header-logo"></div>
      <div onClick={() => setShowNav(!showNav)} className="menu-icon header-center">
      <img src={fi_menu} alt="" />
      </div>
    </div>
      
    <div className="header-main header-center">
              
      {/* BUAT SEARCH */}
  
      <div className="admin-user">
        <div className="admin-profile">
          <div className="admin-logo">
            <img src={Group15} alt="" />
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              Admin Bcr
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleLogout} href="#/action-1">Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header