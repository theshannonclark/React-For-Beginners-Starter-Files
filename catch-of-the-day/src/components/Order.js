import React from 'react';

import { formatPrice } from '../helpers';

class Order extends React.Component {
  
  renderOrder(orderId) {
    const fish = this.props.fishes[orderId];
    const count = this.props.order[orderId];
    const removeButton = <button onClick={() => this.props.removeFromOrder(orderId)}>&times;</button>

    if (!fish || fish.status === 'unavailable') {
      return <li key={orderId}>Sorry, {fish ? fish.name : 'fish'} is no longer available. {removeButton}</li>
    }
    return (
      <li key={orderId}>
        <span>{count}lbs {fish.name} {removeButton}</span>
        <span className="price">{formatPrice(count * fish.price)}</span>
      </li>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = (fish && (fish.status === 'available'));

      if (isAvailable) {
        return prevTotal + (count * fish.price || 0);
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder.bind(this))}
          <li className="total">
            <strong>Total: </strong>
            {formatPrice(total)}
          </li>
        </ul>
      </div>
    )
  }
}

export default Order;