import TYPES from "../types"

const initState = {
  cars: [],
  car: {},
  orders: [],
}

const carReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      }
    default:
      return state
  }
}

export default carReducer
