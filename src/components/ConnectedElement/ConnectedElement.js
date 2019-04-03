import { LitElement } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../store/store';

const withStore = BaseElement => connect(store)(BaseElement)
const ConnectedElement = class extends withStore(LitElement) {
  constructor() {
    super();
    this.dispatch = store.dispatch;
  }
}

export { ConnectedElement }