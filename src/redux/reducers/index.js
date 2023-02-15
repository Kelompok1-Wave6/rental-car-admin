import { combineReducers } from "redux"

import dataOrderReducer from "./dataOrderReducer"
import carsReducer from "./carsReducer"

const rootReducer = combineReducers({

  dataOrder: dataOrderReducer,
  cars: carsReducer,
 
})

export default rootReducer