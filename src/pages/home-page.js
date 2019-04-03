// import { component } from 'haunted';
import { html, LitElement } from 'lit-element'

// const Component = () => html`
//   <h1>Home</h1>
// `

export default class Component extends LitElement {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <h1>Home</h1>
    `
  }
}

window.customElements.define('home-page', Component);
