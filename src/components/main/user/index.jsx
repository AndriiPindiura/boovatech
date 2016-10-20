import React from 'react';
// import { browserHistory } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import BemyButton from '../button';
import styles from './main.scss';
// import animation from './animation.css';

const User = props => {
  const { userManager, actions } = props;
  console.log(props);
  return (
    <section className={styles.user}>
      <nav>
        <a onClick={actions.signIn}>Sign in</a>
        <a onClick={actions.signUp}>Sign up</a>
      </nav>
      <div className={(userManager.signin || userManager.signup) ? styles.usermanager : null}>
        {userManager.signin ? (
          <select>
            {(userManager.users.slice ? userManager.users.map(user => <option key={user}>{user}</option>) : null)}
          </select>
          ) : (
            <input />
          )
        }
      </div>
    </section>
  );
};

User.displayName = 'User';

// Uncomment properties you need
// GoFEx.propTypes = {
//   facebook: React.PropTypes.object.isRequired,
//   invitation: React.PropTypes.object.isRequired,
// };
// InvitationComponent.defaultProps = {};

export default User;

