import {
  GET_CARS_PENDING,
  GET_CARS_SUCCESS,
  ADD_CAR_PENDING,
  ADD_CAR_SUCCESS,
  GET_SINGLE_CAR,
  EDIT_CAR_PENDING,
  EDIT_CAR_SUCCESS,
  REMOVE_CAR_PENDING,
  REMOVE_CAR_SUCCESS

} from '../actions/cars'


import { createStore, applyMiddleware } from 'redux'

import { CarsRef, authRef, provider } from "../config/firebase";
import thunkMiddleware from 'redux-thunk'

// export default (state = [], action) => {
//   switch (action.type) {
//     case GET_CARS_PENDING:
//       return state;

//     case ADD_CAR_PENDING:
//       return state;
//     case ADD_CAR_SUCCESS:
//       return [...action.payload.data]
//     case EDIT_CAR_PENDING:
//       return state;
//     case EDIT_CAR_SUCCESS:
//       return [...action.payload.data]
//     case REMOVE_CAR_PENDING:
//       return state;
//     case REMOVE_CAR_SUCCESS:
//       return [...action.payload.data]
//     default:
//       return state;
//   }
// }



function Reducer (state = [], action) {
 switch (action.type) {
  case GET_CARS_SUCCESS:
   return action.cars
  default:
   return state
  }
}



function Reducer (state = [], action) {
 switch (action.type) {
  case GET_SINGLE_CAR:
   return action.car
  default:
   return state
  }
}
export default createStore(Reducer, applyMiddleware(thunkMiddleware))
