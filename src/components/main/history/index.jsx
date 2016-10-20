import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClose from 'material-ui/svg-icons/navigation/close';

// import ContentRemove from 'material-ui/svg-icons/content/clear';
// import { browserHistory } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import BemyButton from '../button';
import styles from './main.scss';
// import animation from './animation.css';

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.deleteList = this.deleteList.bind(props);
  }

  deleteList() {
    this.actions.deleteList(this.shopping);
  }

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.complete} />
        <span>{this.props.shopping.date}</span>
        <button onClick={this.deleteList}>
          <ContentClose style={{ fill: 'rgba(255, 0, 0, .5)' }} />
        </button>
      </div>
    );
  }
}

const History = props => {
  // console.log(props);
  // const date = new Date();
  // console.log(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`);
  const { history } = props;
  return (
    <section className={styles.history}>
      <nav>
        <FloatingActionButton
          mini
          onClick={() => console.log('click')}
          disabled={!props.user}
        >
          <ContentAdd />
        </FloatingActionButton>
      </nav>
      <section>
        {history.length > 0 ?
          history.map(shoppingList => <Shopping key={shoppingList.id} shopping={shoppingList} actions={props.actions} />)
           : null}
      </section>
    </section>
  );
};

History.displayName = 'History';

// Uncomment properties you need
// GoFEx.propTypes = {
//   facebook: React.PropTypes.object.isRequired,
//   invitation: React.PropTypes.object.isRequired,
// };
// InvitationComponent.defaultProps = {};

export default History;

