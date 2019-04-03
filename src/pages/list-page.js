// import { component } from 'haunted';
import { html } from 'lit-element'
import { fetchAll } from '../store/actions/pokemon.actions'
import { ConnectedElement } from '../components/ConnectedElement/ConnectedElement'

export default class Component extends ConnectedElement {
  static get properties() {
    return {
      pokemonList: {type: Array}
    }
  }

  stateChanged(state) {
    console.log('stateChanged', state.pokemon.results)
    this.pokemonList = state.pokemon.results
  }

  // eslint-disable-next-line class-methods-use-this
  firstUpdated() {
    console.log('firstUpdated', this.pokemonList)
    if (!this.pokemonList || !this.pokemonList.length ) this.dispatch(fetchAll())
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <ul>
      ${this.pokemonList.map(({ name }) => html`<li><a href="/pokemon/${name}">${name}</a></li>`)}
      </ul>
    `
  }
}

window.customElements.define('list-page', Component);
