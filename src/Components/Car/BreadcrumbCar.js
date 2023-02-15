import React from 'react'
import '../../CSS/Components/Breadcrumb.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Icon } from '@iconify/react';

const BreadcrumbCar = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item active>Cars</Breadcrumb.Item>
      <Icon icon="uil:angle-right" color="#222" width="24" height="24" />
      <Breadcrumb.Item href='#'>List Car</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default BreadcrumbCar