import {
  GET_CARS_PENDING,
  GET_CARS_SUCCESS,
  ADD_CAR_PENDING,
  ADD_CAR_SUCCESS,
  GET_SINGLE_CAR,
  EDIT_CAR_PENDING,
  EDIT_CAR_SUCCESS,
  REMOVE_CAR_PENDING,
  REMOVE_CAR_SUCCESS,
    GET_SINGLE_CAR_PENDING

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

const initialState = {
    payload: '',
    loading: true,
};


function Reducer (state = [], action) {
 switch (action.type) {
  case GET_CARS_SUCCESS:
   return action.payload
  default:
   return state
  }
}



function Reducer (state = initialState, action) {
 switch (action.type) {
     case GET_SINGLE_CAR_PENDING:
         return { loading: true };
  case GET_SINGLE_CAR:
   return {
       car: action.payload,
       loading: false
   }
  default:
   return state
  }
}
export default Reducer;