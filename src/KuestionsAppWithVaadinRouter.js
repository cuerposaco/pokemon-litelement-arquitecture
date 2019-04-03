import { html, css } from 'lit-element';
import { withRouter } from './enhancers';
import { ConnectedElement } from './components/ConnectedElement/ConnectedElement';

export default class KuestionsApp extends withRouter()(ConnectedElement) {
  static get styles() {
    return css`
      :host {
      }
      nav {
        padding: 1em;
        background-color: white;
        border-bottom: 1px solid #c3c3c3;
      }

      main {
        padding: 1em;
      }

      a {
        font-weight: normal;
        color: #c3c3c3;
        padding: 0 0.5em;
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
    };
  }

  firstUpdated() {
    this.routes = [
      {
        path: '/',
        children: [
          {
            path: '',
            component: 'home-page',
            action: () => {
              this.activePage = 'home';
              import('./pages/home-page'); // .then(res => console.log('response', res)).catch(err => console.log(err))
            },
          },
          {
            path: '/pokemons',
            component: 'list-page',
            action: () => {
              this.activePage = 'pokemons';
              import('./pages/list-page'); // .then(res => console.log('response', res)).catch(err => console.log(err))
            },
          },
          {
            path: '/pokemon/:name',
            component: 'detail-page',
            action: () => {
              this.activePage = 'pokemons';
              import('./pages/detail-page'); // .then(res => console.log('response', res)).catch(err => console.log(err))
            },
          },
        ],
      },
    ];
    super.firstUpdated();
  }

  // stateChanged(state) {}
  render() {
    return html`
      <nav>
        <a href="/" class=${this.activePage === 'home' ? 'active' : ''}>Home</a>
        <a href="/pokemons" class=${this.activePage === 'pokemons' ? 'active' : ''}>Pokemons</a>
      </nav>
      <main></main>
    `;
  }
}
