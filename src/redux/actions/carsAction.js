import axios from "axios"
import TYPES from "../types"
import access_token from "../../Assets/accessToken"

export const handleOrders = (page, rowsPerPage) => (dispatch) => {
  axios
    .get(
      `https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc&page=${
        page + 1
      }&pageSize=${rowsPerPage}`,
      {
        headers: { access_token },
      }
    )
    .then((res) => {
      dispatch({
        type: TYPES.GET_ORDERS,
        payload: res.data.orders,
      })
    })
    .catch((err) => console.log(err.message))
}
