import React from 'react'
import '../CSS/Page.css';

import { useTransition, animated } from "react-spring"
import { useAtom } from "jotai"

import { showNavAtom } from "../Layout/Header"
import { NavAnimation } from "../Assets/NavAnimation"
import NavDashboard from '../Layout/NavDashboard'

import Dashboard from '../Components/Dashboard/Dashboard';


const DashboardPage = () => {
  const [showNav] = useAtom(showNavAtom)
  const navTransition = useTransition(showNav, NavAnimation)
  return (
    <>
    <main>
        <section className="dashboard-page">
          {navTransition(
            (style, item) =>
              item && (
                <animated.nav style={style} className="nav-container">
                  <NavDashboard />
                </animated.nav>
              )
          )}
            
            <Dashboard/>
       
        </section>
      </main>
      </>
  )
}

export default DashboardPage