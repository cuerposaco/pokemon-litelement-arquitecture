import { html, css } from 'lit-element';
// import '@stencil/router/dist/stencilrouter'
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

  // firstUpdated() {}

  // stateChanged(state) {}
  render() {
    return html`
      <nav>
        <a href="/" class=${this.activePage==='home' ? 'active' : '' }>Home</a>
        <a href="/pokemons" class=${this.activePage==='list' ? 'active' : '' }>Pokemons</a>
      </nav>
      <stencil-router>
        <stencil-route-switch>
          <stencil-route url="/" component="home-page" exact={true}/>
          <stencil-route url="/pokemons" component="list-page" />
          <stencil-route url="/pokemon/:name" component="detail-page" />
        </stencil-route-switch>
      </stencil-router>
    `;
  }
}