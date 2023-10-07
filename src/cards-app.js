import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "owl-card/src/owl-card.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardsApp extends LitElement {
  static properties = {
    
  }

  static styles = css`
    :host {
      display: inline-flex;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <owl-card name="supertf">
      </owl-card>

      <meme-maker alt="Cat stalking a small toy" image-url="https://cdn2.thecatapi.com/images/9j5.jpg" top-text="I bring you" bottom-text="the death">
      </meme-maker>
    `;
  }
}

customElements.define('cards-app', CardsApp);