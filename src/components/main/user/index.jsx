import React from 'react';
// import { browserHistory } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ContentClose from 'material-ui/svg-icons/navigation/close';

// import BemyButton from '../button';
import styles from './main.scss';
// import animation from './animation.css';

const User = props => {
  const { userManager, actions } = props;
  // console.log(props);
  return (
    <section className={styles.user}>
      <nav>
        <p>Welcome: <span>{userManager.user}</span></p>
        <div>
          <a onClick={actions.signIn}>{userManager.user ? 'Switch user' : 'Sign in'}</a>
          <a onClick={actions.signUp}>Sign up</a>
        </div>
      </nav>
      <div className={(userManager.signin || userManager.signup) ? styles.usermanager : null}>
        <div>
          {userManager.signin ? (
            <select onChange={actions.login}>
              <option />
              {(userManager.users.slice ? userManager.users.map(user => <option key={user}>{user}</option>) : null)}
            </select>
            ) : (
              <input onKeyDown={actions.registerUser} />
            )
          }
        </div>
        <button onClick={actions.close}>
          <ContentClose style={{ fill: '#fff' }} />
        </button>
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

