import React from 'react'
import '../../CSS/Components/Dashboard.css';
import BreadcrumbDash from './BreadcrumbDash'
import RentedCar from './RentedCar/RentedCar'
import ListOrder from './ListOrder/ListOrder'

const Dashboard = () => {
  return (
    <section className="dashboard">
      <main className="dashboard-container">
        <BreadcrumbDash/>
        <RentedCar/>
       <ListOrder/>
      </main>
    </section>
  )
}

export default Dashboard