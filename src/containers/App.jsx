import React, { PropTypes } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Helmet from 'react-helmet';

require('../components/main.scss');

// injectTapEventPlugin();

/* eslint-disable */
Date.prototype.getDateString = function () {
  return `${this.getFullYear()}/${this.getMonth() + 1}/${this.getDate()}`;
};
/* esling-enable */
/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
const App = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
