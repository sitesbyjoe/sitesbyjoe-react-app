// src/js/actions/index.js
import axios from 'axios';
import { ADD_USER, GET_PORTFOLIO } from '../constants/action-types';

export function addUser(payload) {
  console.log('addUser running!', payload)
  return { 
    type: ADD_USER, 
    payload
  }
};

export function getPortfolio () {
  return function (dispatch) {
    return axios({
      url: 'http://sitesbyjoe.com/api/portfolio_list',
      method: 'get'
    })
    .then(resp => {
      console.log('redux got something', resp)
      dispatch({
        type: 'DATA_LOADED',
        payload: resp.data
      })
    })
    .catch(err => {
      console.error('oh shit', err)
    });
  }
};