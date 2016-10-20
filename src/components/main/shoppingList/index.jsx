import React from 'react';
// import { browserHistory } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import BemyButton from '../button';
import styles from './main.scss';
// import animation from './animation.css';

const SoppingList = props => {
  console.log(props);
  return (
    <section className={styles.shopping}>
      shopping
    </section>
  );
};

SoppingList.displayName = 'SoppingList';

// Uncomment properties you need
// GoFEx.propTypes = {
//   facebook: React.PropTypes.object.isRequired,
//   invitation: React.PropTypes.object.isRequired,
// };
// InvitationComponent.defaultProps = {};

export default SoppingList;

