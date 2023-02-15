import React from 'react'
import Header from '../Layout/Header'
import Sidebar from '../Layout/Sidebar'


const RenderLayout = ({ children }) => {
  return (
    <>
      <Sidebar/>
      {children}
      <Header/>
    </>
  )
}

export default RenderLayout
