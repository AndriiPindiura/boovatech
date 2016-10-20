import React from 'react';
// import { browserHistory } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import BemyButton from '../button';
import UserManager from './user';
import ShoppingList from './shoppingList';
import History from './history';
import styles from './main.scss';
// import animation from './animation.css';

const Main = props => {
  const { userManager, boovatech } = props;
  const history = [...boovatech.history].filter(item => item.user === userManager.user);
  // console.log(props);
  return (
    <section className={styles.main}>
      <UserManager userManager={userManager} actions={props.userActions} />
      <div>
        <ShoppingList list={boovatech.list} />
        <History
          history={history}
          user={userManager.user}
          actions={props.actions}
          active={boovatech.shoppingList}
        />
      </div>
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

