import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as boovatechActions from '../redux/modules/boovatech';
import * as userActions from '../redux/modules/user';
import MainComponent from '../components/main';


function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {
    boovatech: state.boovatech,
    userManager: state.userManager,
  };
  return props;
}
function mapDispatchToProps(dispatch) {
// function mapDispatchToProps() {
  /* Populated by react-webpack-redux:action */
  // const actions = { facebook: require('../actions/facebook.js') };
  // const actionMap = { actions: bindActionCreators(actions, dispatch) };
  // return actionMap;
  return {
    actions: bindActionCreators(boovatechActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
    // invitationActions: bindActionCreators(invitationActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
