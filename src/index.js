import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store';
import './index.css';
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import Reducer from './reducers/cars'

const StoreInstance = createStore(Reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);