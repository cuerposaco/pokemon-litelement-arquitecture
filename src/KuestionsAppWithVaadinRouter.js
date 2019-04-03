import { html, css } from 'lit-element';
import { Router } from '@vaadin/router';
import { ConnectedElement } from './components/ConnectedElement/ConnectedElement'

export default class KuestionsApp extends ConnectedElement {
  static get styles() {
    return css`
      :host {
        background: grey;
        display: block;
        padding: 25px;
      }
      a {
        font-weight: normal;
        color: #c3c3c3;
      }
      a.active {
        font-weight: bold;
        color: #666;
      }
    `;
  }

  static get properties() {
    return {
      activePage: { type: String },
    }
  }

  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector('main'));
    router.setRoutes([
      {
        path: '/',
        children: [
          {
            path: '',
            component: 'home-page',
            action: () => {
              this.activePage = 'home'
              import('./pages/home-page').then(res => console.log('response', res)).catch(err => console.log(err))
            },
          },
          {
            path: '/pokemons',
            component: 'list-page',
            action: () => {
              this.activePage = 'pokemons'
              import('./pages/list-page').then(res => console.log('response', res)).catch(err => console.log(err))
            },
          },
          {
            path: '/pokemon/:name',
            component: 'detail-page',
            action: () => {
              this.activePage = 'pokemons'
              import('./pages/detail-page').then(res => console.log('response', res)).catch(err => console.log(err))
            },
          },
        ]
      },
    ]);
  }

  // stateChanged(state) {}
  render() {
    return html`
      <nav>
        <a href="/" class=${this.activePage==='home' ? 'active' : '' }>Home</a>
        <a href="/pokemons" class=${this.activePage==='list' ? 'active' : '' }>Pokemons</a>
      </nav>
      <main></main>
    `;
  }
}
