import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import store from "./js/store";
import { Provider } from "react-redux";
import { addUser } from './js/actions';
import { getPortfolio } from './js/actions';


store.subscribe(() => console.log('Look ma, Redux!!'));
store.dispatch(addUser({ name: 'Jack' }));
store.dispatch(getPortfolio())

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));

// registerServiceWorker();