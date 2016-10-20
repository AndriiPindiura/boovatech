import React from 'react';
// import { browserHistory } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import BemyButton from '../button';
import UserComponent from './user';
import styles from './main.scss';
// import animation from './animation.css';

const Main = props => {
  // const { user } = props;
  return (
    <section className={styles.main}>
      <UserComponent userManager={props.userManager} actions={props.userActions} />
    </section>
  );
};

Main.displayName = 'Main';

// Uncomment properties you need
// GoFEx.propTypes = {
//   facebook: React.PropTypes.object.isRequired,
//   invitation: React.PropTypes.object.isRequired,
// };
// InvitationComponent.defaultProps = {};

export default Main;

