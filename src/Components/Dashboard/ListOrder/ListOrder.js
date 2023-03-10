import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

// comp
import ListTable from "./ListTable/ListTable"


// func
import { handleOrders } from "../../../redux/actions/carsAction"
import ListTitle from "./ListTitle"

const ListOrder = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleOrders(page, rowsPerPage))
  }, [dispatch, page, rowsPerPage])

  const props = {
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
  }
  return (
    <>
     <ListTitle/>
      <ListTable {...props} />
    </>
  )
}

export default ListOrder
