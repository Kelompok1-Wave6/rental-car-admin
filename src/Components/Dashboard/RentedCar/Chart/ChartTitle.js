import React from 'react'

import "../../../../CSS/Components/Dashboard.css"

import Rectangle9 from '../../../../Assets/Media/Rectangle9.png';

const ChartTitle = () => {
  return (
    <section className="chart-title">
    <div className="chart-title-container">
        <img src={Rectangle9} alt="" />
        <h3 className='rented'>Rented Car Data Visualization</h3>
    </div>
  </section>
  )
}

export default ChartTitle