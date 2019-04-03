// import { component } from 'haunted';
import { css, html, LitElement } from 'lit-element';
// import { ConnectedElement } from '../components/ConnectedElement/ConnectedElement'
import { fetchByName } from '../services/pokemon/pokemon';

export default class Component extends LitElement {
  static get styles() {
    return css`
      :host {
      }
    `;
  }

  static get properties() {
    return {
      pokemonDetail: { type: Object },
    };
  }

  firstUpdated() {
    fetchByName(this.location.params.name).then(detail => {
      this.pokemonDetail = detail;
    });
  }

  render() {
    return html`
      <div>
        ${!this.pokemonDetail
          ? html`
              <noscript></noscript>
            `
          : html`
              <div><strong>base_experience:</strong> ${this.pokemonDetail.base_experience}</div>
              <div><strong>weight:</strong> ${this.pokemonDetail.weight}</div>
              <div><strong>height:</strong> ${this.pokemonDetail.height}</div>
              <div>
                ${Object.keys(this.pokemonDetail.sprites)
                  .filter(key => this.pokemonDetail.sprites[key])
                  .map(
                    key =>
                      html`
                        <img src="${this.pokemonDetail.sprites[key]}" title="${key}" />
                      `,
                  )}
              </div>
            `}
      </div>
    `;
  }
}

window.customElements.define('detail-page', Component);
