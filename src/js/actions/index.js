// src/js/actions/index.js
import axios from 'axios';

export function addUser(payload) {
  console.log('addUser running!', payload)
  return { 
    type: 'ADD_USER', 
    payload
  }
};

export function getPortfolio () {
  console.log('getPortolio running')
  return function (dispatch) {
    return axios({
      url: 'http://sitesbyjoe.com/api/portfolio_list',
      method: 'get'
    })
    .then(resp => {
      console.log('getPortfolio returned', resp)
      dispatch({
        type: 'PORTFOLIO_LOADED',
        payload: resp.data
      })
    })
    .catch(err => {
      console.error('oh shit', err)
    });
  }
};

export function getPosts () {
  return function (dispatch) {
    return axios({
      url: 'http://sitesbyjoe.com/api/post_list',
      method: 'get'
    })
    .then(resp => {
      console.log('getPosts returned', resp)
      dispatch({
        type: 'POSTS_LOADED',
        payload: resp.data
      })
    })
    .catch(err => {
      console.error('oh shit', err)
    });
  }
};