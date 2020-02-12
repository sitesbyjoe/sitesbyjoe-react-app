// src/js/reducers/index.js

import { ADD_USER, GET_PORTFOLIO } from '../constants/action-types';

const initialState = {
  childrenz: [{
    name: 'Isaac'
  },{
    name: 'Emilie-Alice'
  }],
  users: [{
    name: 'Joe'
  }, {
    name: 'Maryellen'
  }],
  portfolio: [],

  counter: 0
  // users: []
};

console.log('initial state set', initialState);

function rootReducer(state = initialState, action) {

  console.log('rootReducer', action)
  
  if (action.type === ADD_USER) {
    // this returns a new object COPY of state, with mutation
    // create empty object, populate with state, mutation
    return Object.assign({}, state, {
      users: state.users.concat(action.payload)
    });
  }

  if (action.type === 'DATA_LOADED') {
    return Object.assign({}, state, {
      portfolio: state.portfolio.concat(action.payload)
    });
  }

  return state;

}

export default rootReducer;