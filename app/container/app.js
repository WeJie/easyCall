'user strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import * as reducers from '../reducers';

import EasyCall from './../components/easyCall'; 


const reducer = combineReducers(reducers);
const store = createStore(reducer);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <EasyCall/>
      </Provider>
    );
  }
}