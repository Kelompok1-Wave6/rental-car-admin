import React from 'react'
import '../CSS/Page.css';

import { useTransition, animated } from "react-spring"
import { useAtom } from "jotai"

import { showNavAtom } from "../Layout/Header"
import { NavAnimation } from "../Assets/NavAnimation"
import NavCar from '../Layout/NavCar'

import Car from '../Components/Car/Car';

const CarPage = () => {
  const [showNav] = useAtom(showNavAtom)
  const navTransition = useTransition(showNav, NavAnimation)
  return (
    <>
    <main>
        <section className="car-page">
          {navTransition(
            (style, item) =>
              item && (
                <animated.nav style={style} className="nav-container">
                  <NavCar />
                </animated.nav>
              )
          )}
            
            <Car/>

        </section>
      </main>
      </>
  )
}

export default CarPage