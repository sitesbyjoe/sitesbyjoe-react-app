// src/js/reducers/index.js

const initialState = {
  // just for fun state stuff
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

  application: {
    version: '3.0',
    name: 'Sites by Joe',
    url: 'http://sitesbyjoe.com'
  },

  // real state stuff
  portfolio: [],
  posts: [],
};

console.log('initial state set', initialState);

function rootReducer(state = initialState, action) {

  console.log('rootReducer', action)
  
  if (action.type === 'ADD_USER') {
    return Object.assign({}, state, {
      users: state.users.concat(action.payload)
    });
  }

  if (action.type === 'PORTFOLIO_LOADED') {
    return { ...state, portfolio: action.payload }
    // return Object.assign({}, state, {
    //   portfolio: action.payload
    // });
  }

  if (action.type === 'POSTS_LOADED') {
    return { ...state, posts: action.payload }
  }

  return state;

}

export default rootReducer;