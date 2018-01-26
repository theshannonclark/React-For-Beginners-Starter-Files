import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  goToStore(event) {
    event.preventDefault();
    this.context.router.transitionTo(`/store/${this.storeInput.value}`);
  }

  render() {
    return (
      <form className='store-selector' onSubmit={(event) => this.goToStore(event)}>
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
};

export default StorePicker;