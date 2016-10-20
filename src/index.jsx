import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './redux/configureStore';
import routes from './routes';
// import App from './containers/App';
// import Main from './containers/Main';

// require('es6-promise').polyfill();

const store = configureStore();
const childRoutes = routes();
render(
  <Provider store={store}>
    <Router history={browserHistory} >
      {childRoutes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
