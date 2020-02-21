import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import App from './App';
import store from "./js/store";
import { Provider } from "react-redux";

store.subscribe(() => console.log('Redux store subscribe'));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));