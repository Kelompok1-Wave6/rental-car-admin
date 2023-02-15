import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
// func
import { handleDataOrder } from "../../../redux/actions/dataOrderAction"
// comp

import ChartFilter from "./Chart/ChartFilter"
import Chart from "./Chart/Chart"
import ChartTitle from "./Chart/ChartTitle"

const ChartRented = () => {
  const [monthSelected, setMonthSelected] = useState("")

  // func
  const dispatch = useDispatch()
  const getDataOrder = () => {
    dispatch(handleDataOrder(monthSelected))
  }

  useEffect(() => {
    getDataOrder(monthSelected)
  }, [])

  const props = {
    monthSelected,
    setMonthSelected,
    getDataOrder,
  }

  return (
    <>
     <ChartTitle/>
     <ChartFilter {...props} />
     <Chart/>
    </>
  )
}

export default ChartRented
