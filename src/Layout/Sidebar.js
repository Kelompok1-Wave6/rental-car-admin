import React from 'react'

// LINK Halaman Dashboard & Admin
import {Link} from 'react-router-dom';

// CSS 
import '../CSS/Layout.css';

// MEDIA FOTO
import Rectangle63 from '../Assets/Media/Rectangle63.png';
import Home from '../Assets/Media/Home.png';
import Administrator from '../Assets/Media/Administrator.png';

const Sidebar = () => {
  return (

    <div className="sidebar">
        <div className="logo">
            <img src={Rectangle63} alt="" />
        </div>
        <div className="sidebar-icon sidebar-dashboard">
            <Link to={`/dashboard`}>
                <img src={Home} alt="" />
            </Link>
        </div>
        <div className="sidebar-icon">
            <Link to={`/listCar`}>
                <img src={Administrator} alt="" />
            </Link>
        </div>
    </div>

  )
}
export default Sidebar