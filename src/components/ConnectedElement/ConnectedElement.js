import { LitElement } from 'lit-element';
import { withStore } from '../../enhancers'
import { store } from '../../store/store';

const ConnectedElement = class extends withStore(store)(LitElement) {
  constructor() {
    super();
    this.dispatch = store.dispatch;
  }
}

export { ConnectedElement }