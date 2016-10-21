import React from 'react';
import ContentClose from 'material-ui/svg-icons/navigation/close';

import styles from './main.scss';

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
      <div className={styles.item}>
        <input type="checkbox" onChange={this.completeItem} value={item.comlete} />
        <input className={styles.description} value={item.description} onChange={this.changeItem} />
        <button onClick={this.deleteItem}>
          <ContentClose style={{ fill: 'rgba(255, 0, 0, .5)' }} />
        </button>
      </div>
    );
  }
}

ShoppingItem.displayName = 'ShoppingItem';

// Uncomment properties you need
// GoFEx.propTypes = {
//   facebook: React.PropTypes.object.isRequired,
//   invitation: React.PropTypes.object.isRequired,
// };
// InvitationComponent.defaultProps = {};

export default ShoppingItem;

