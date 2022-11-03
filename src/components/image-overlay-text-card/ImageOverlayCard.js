import html from "./image-overlay-text-card.html";
import css from "./image-overlay-text-card.css";
import { setupShadow } from "../../utils/helper";

class ImageOverlayTextCard extends HTMLElement {

	constructor() {
		super();
		setupShadow(this, html, css);  
	  }

	async connectedCallback() {
		  this.shadowRoot.querySelector('.image-card-text-total').innerHTML = this.getAttribute('number');
		  this.shadowRoot.querySelector('.image-card-text-title').innerHTML = this.getAttribute('title');
	      this.shadowRoot.querySelector('.image-card').style.background = this.getAttribute('imageurl');
        }
  }
  
   customElements.define('image-overlay-text-card', ImageOverlayTextCard);
   