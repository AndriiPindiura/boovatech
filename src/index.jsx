import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './redux/configureStore';
import routes from './routes';
// import App from './containers/App';
// import Main from './containers/Main';

// require('es6-promise').polyfill();
injectTapEventPlugin();


const store = configureStore();
const childRoutes = routes();
render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory} >
        {childRoutes}
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
