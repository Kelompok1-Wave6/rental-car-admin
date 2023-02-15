import React from "react"

import Rectangle9 from '../../../Assets/Media/Rectangle9.png';

const ListTitle = () => {
  return (
    <section className="list-title">
      <div className="list-title-container">
        <h2 className="title">Dashboard</h2>
        <aside>
        <img src={Rectangle9} alt="" />
          <h3 className='rented'>List Order</h3>
        </aside>
      </div>
    </section>
  )
}

export default ListTitle
