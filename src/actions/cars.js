import axios from 'axios'
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

import { CarsRef, authRef, provider } from "../components/admin/reference";
export const GET_CARS_PENDING = 'GET_CARS_PENDING'
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS'
export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS'
export const GET_SINGLE_CAR = 'GET_SINGLE_CAR'
export const ADD_CAR_PENDING = 'ADD_CAR_PENDING'
export const ADD_CAR_SUCCESS = 'ADD_CAR_SUCCESS'
export const EDIT_CAR_PENDING = 'EDIT_CAR_PENDING'
export const EDIT_CAR_SUCCESS = 'EDIT_CAR_SUCCESS'
export const REMOVE_CAR_PENDING = 'REMOVE_CAR_PENDING'
export const REMOVE_CAR_SUCCESS = 'REMOVE_CAR_SUCCESS'
export const GET_SINGLE_CAR_PENDING = 'GET_SINGLE_CAR_PENDING';



export function getCarsThunk() {
 return dispatch => {
 const cars = [];
CarsRef.on('value', snap => {
      const tasks = [];
      let Cars = []
      snap.forEach(shot => {
       Cars.push({ ...shot.val(), key: shot.key });
     })
 })
 dispatch({
  type:GET_CARS_SUCCESS,
payload:cars
  })
  }

}



export function  getsinglecar(id){
    return async dispatch => {
        dispatch({ type: GET_SINGLE_CAR_PENDING });
     CarsRef.child(id).once("value", function(snapshot) {
    dispatch({
      type: GET_SINGLE_CAR,
      payload: snapshot.val()
   })
  
 })
  }
}

export function  search(make) {
return async dispatch => {


  dispatch({ type: GET_SEARCH_RESULTS });
     CarsRef.child(make).once("value", function(snapshot) {
    dispatch({
      type: GET_SEARCH_RESULTS,
      payload: snapshot.val()
   })
  
 })
  }
}

export const createCar = (newCar) => {
  return async (dispatch) => {
    dispatch({ type: ADD_CAR_PENDING })
    let newcar = await axios.post('http://localhost:8000/car', newCar)
    dispatch({
      type: ADD_CAR_SUCCESS,
      payload: newcar
    })
  }
}
<<<<<<< HEAD




export const editCar = (editedCar) => {
  console.log(editedCar, "*****");
  return async (dispatch) => {
    dispatch({ type: EDIT_CAR_PENDING })
    let bodyObj = {
      car: {
        year: editedCar.year,
        make: editedCar.make,
        model: editedCar.model,
        trim: editedCar.trim,
        engine: editedCar.engine,
        drive_type: editedCar.drive_type,
        body_type: editedCar.body_type,
        ext_color: editedCar.ext_color,
        int_color: editedCar.int_color,
        transmission: editedCar.transmission,
        price: editedCar.price,
        sale: editedCar.sale,
        status: editedCar.status,
        vin: editedCar.vin
      },
      image: editedCar.link,
      features: {
        elect_stab: editedCar.elect_stab,
        wireless: editedCar.wireless,
        seat: editedCar.seat,
        keyless: editedCar.keyless,
        trip_comp: editedCar.trip_comp,
        tire_pressure: editedCar.tire_pressure,
        wiper: editedCar.wiper,
        headlight: editedCar.headlight
      }
    }
    let updatedcar = await axios.patch(`http://localhost:8000/car/${editedCar.id}`, bodyObj)
    dispatch({
      type: EDIT_CAR_SUCCESS,
      payload: updatedcar
    })
  }
}

export const deleteCar = (carId) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_CAR_PENDING })
    let removedcar = await axios.delete(`http://localhost:8000/car/${carId}`)
    dispatch({
      type: REMOVE_CAR_SUCCESS,
      payload: removedcar
    })
  }
}
=======
>>>>>>> parent of 0453b9b... working on edit car
