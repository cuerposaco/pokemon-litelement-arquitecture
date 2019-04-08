// import { component } from 'haunted';
import { css, html } from 'lit-element';
import { fetchAll, setPageSize } from '../store/actions/pokemon.actions';
import { ConnectedElement } from '../components/ConnectedElement/ConnectedElement';

export default class Component extends ConnectedElement {
  static get styles() {
    return css`
      :host {
      }
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
      pokemonList: { type: Array },
      loading: { type: Boolean },
      totalItems: { type: Number },
      totalPages: { type: Number },
      currentPage: { type: Number },
      pageSize: { type: Number },
    };
  }

  stateChanged(state) {
    const {results, loading, totalItems, pages, currentPage, pageSize} = state.pokemon;
    this.pokemonList = results;
    this.loading = loading;
    this.totalItems = totalItems;
    this.totalPages = pages;
    this.currentPage = currentPage;
    this.pageSize = pageSize;
  }

  // eslint-disable-next-line class-methods-use-this
  firstUpdated() {
    if (
      (this.currentPage !== this.location.params.page) ||
      (!this.pokemonList || !this.pokemonList.length)
    ) {
      this.dispatch(fetchAll(this.location.params.page));
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <section>
        <div>Mostrando <strong>${this.pokemonList.length}</strong> de <strong>${this.totalItems}</strong></div>
        <div class="list">
          ${this.loading ? html`<div>loading...</div>` : null}
          ${this.pokemonList.map(
            ({ name }) =>
              html`
                <div class="list-item"><a href="/pokemon/${name}">${name}</a></div>
              `,
          )}
        </div>
        ${
          !this.pokemonList
            ? html``
            : html`<div class="list">${
              Array(this.totalPages).fill(0)
                .map((_, i) => i)
                .map(page =>
                  page !== this.currentPage
                    ? html`<a class="list-item" href="/pokemons/${page > 0 ? page : '' }">${page + 1}</a>`
                    : html`<span class="list-item">${page + 1}</a>`
                )
              }</div>`
        }
        <select @change=${e => this.dispatch(setPageSize(e.target.value))}>
          ${
            [10, 20, 50, 100]
              .map(value =>
                html`
                  <option value="${value}" ?selected=${value === this.pageSize}>
                    ${value}
                  </option>
                `
              )
          }
        </select>
      </section>
    `;
  }
}

window.customElements.define('list-page', Component);
