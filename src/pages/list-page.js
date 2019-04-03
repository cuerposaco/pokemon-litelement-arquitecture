// import { component } from 'haunted';
import { css, html } from 'lit-element'
import { fetchAll } from '../store/actions/pokemon.actions'
import { ConnectedElement } from '../components/ConnectedElement/ConnectedElement'

export default class Component extends ConnectedElement {
  static get styles() {
    return css`
      :host {}
      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .list-item {
        text-transform: uppercase;
        padding: 0.7em;
      }
      .list-item a,
      .list-item a:visited,
      .list-item a:focus,
      .list-item a:active {
        color: #333;
        text-decoration: none;
      }
      .list-item a:hover {
        font-weight: bold;
        color: #333;
      }
    `;
  }

  static get properties() {
    return {
      pokemonList: {type: Array}
    }
  }

  stateChanged(state) {
    this.pokemonList = state.pokemon.results
  }

  // eslint-disable-next-line class-methods-use-this
  firstUpdated() {
    if (!this.pokemonList || !this.pokemonList.length ) this.dispatch(fetchAll())
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <section>
        <div class="list">
          ${this.pokemonList.map(({ name }) => html`<div class="list-item"><a href="/pokemon/${name}">${name}</a></div>`)}
        </div>
      </section>
    `
  }
}

window.customElements.define('list-page', Component);
