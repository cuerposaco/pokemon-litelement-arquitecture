import { connect } from 'pwa-helpers';
import { Router } from '@vaadin/router';

// redux connector
export const withStore = store => connect(store);

// Router Enhancer
export const withRouter = () => BaseClass => class extends BaseClass {

  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector('main'));
    router.setRoutes(this.routes)
    console.log(this.routes)
  }
}