import React from 'react'
import '../../CSS/Components/Breadcrumb.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Icon } from '@iconify/react';

const BreadcrumbDash = () => {
  return (

    <Breadcrumb>
      <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      <Icon icon="uil:angle-right" color="#222" width="24" height="24" />
      <Breadcrumb.Item href='#'>Dashboard</Breadcrumb.Item>
    </Breadcrumb>
    
  )
}

export default BreadcrumbDash