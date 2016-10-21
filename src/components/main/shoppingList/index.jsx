import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentArchive from 'material-ui/svg-icons/content/select-all';
import ContentSave from 'material-ui/svg-icons/content/save';
import ContentClose from 'material-ui/svg-icons/navigation/close';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


// import { browserHistory } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import BemyButton from '../button';
import styles from './main.scss';
import animation from './animation.css';

class ShoppingItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(props);
    this.changeItem = this.changeItem.bind(props);
    this.completeItem = this.completeItem.bind(props);
  }
  deleteItem() {
    console.log(this);
    this.actions.deleteItem(this.item.id);
  }

  changeItem(item) {
    this.actions.changeItem({ id: this.item.id, description: item.target.value});
  }

  completeItem() {
    this.actions.completeItem(this.item.id);
  }

  render() {
    const { item } = this.props;
    return (
      <div>
        <input type="checkbox" onChange={this.completeItem} value={item.comlete} />
        <input className={styles.description} value={item.description} onChange={this.changeItem} />
        <button onClick={this.deleteItem}>
          <ContentClose style={{ fill: 'rgba(255, 0, 0, .5)' }} />
        </button>
      </div>
    );
  }
}

const SoppingList = props => {
  const { boovatech, actions, user} = props;
  return (
    <section className={styles.shopping}>
      { boovatech.shoppingList ? (
        <div>
          <span>{boovatech.shoppingList.date || (new Date()).getDateString()}</span>
          <nav>
            <FloatingActionButton
              mini
              onClick={() => console.log('click')}
            >
              <ContentArchive />
            </FloatingActionButton>
            <input onChange={actions.addShoppingItem} value={boovatech.itemToAdd || ''} />
            <FloatingActionButton
              mini
              onClick={actions.addItem}
              disabled={!(boovatech.active && boovatech.active.add)}
            >
              <ContentAdd />
            </FloatingActionButton>
          </nav>
          <section>
            <ReactCSSTransitionGroup
              transitionName={{
                enter: animation.enter,
                enterActive: animation.enterActive,
                leave: animation.leave,
                leaveActive: animation.leaveActive,
                appear: animation.appear,
                appearActive: animation.appearActive
              }}
              transitionAppear={false}
              transitionEnter
              transitionLeave
              transitionAppearTimeout={800}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              {boovatech.shoppingList.shoppingList && boovatech.shoppingList.shoppingList.slice ?
                boovatech.shoppingList.shoppingList.map(item =>
                  <ShoppingItem key={item.id} item={item} actions={actions} />
                  )
                :
                null
              }
            </ReactCSSTransitionGroup>
          </section>
          <footer>
            <FloatingActionButton
              mini
              secondary
              onClick={() => console.log('click')}
              disabled={!(boovatech.active && boovatech.active.save)}
              onClick={() => actions.saveList(user)}
            >
              <ContentSave />
            </FloatingActionButton>
          </footer>
        </div>
        ) : null}
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

