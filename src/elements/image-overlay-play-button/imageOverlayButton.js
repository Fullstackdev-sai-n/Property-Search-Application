import html from "./image-overlay-play-button.html";
import css from "./image-overlay-play-button.css";
import { setupShadow } from "../../utils/helper";

class ImageOverlayButton extends HTMLElement {

    constructor() {
        super();
        setupShadow(this, html, css);  
      }
    async connectedCallback() {

            this.shadowRoot.querySelector('.iob-image').attributes[1].value = this.getAttribute('iob-image');
        
        }
   
}

customElements.define('image-overlay-play-button', ImageOverlayButton);
