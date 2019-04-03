// import { component } from 'haunted';
import { html } from 'lit-element'
import { ConnectedElement } from '../components/ConnectedElement/ConnectedElement'
// import { fetchPokemon } from '../store/actions/pokemon.actions'

export default class Component extends ConnectedElement {
  static get properties() {
    return {
      pokemonDetail: {type: Object}
    }
  }

  stateChanged(state) {
    this.pokemonDetail = state.pokemon.results
  }

  // eslint-disable-next-line class-methods-use-this
  firstUpdated() {
    console.log('location.params.name', this.location.params.name)
    console.log(this.location);
    // state.pokemon.results
    // this.dispatch(fetchAll())
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <div>
      Detail ${this.location.params.name}
      </div>
    `
  }
}

window.customElements.define('detail-page', Component);
