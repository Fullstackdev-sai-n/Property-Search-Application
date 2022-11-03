import html from "./services-card.html";
import css from "./services-card.css";
import { setupShadow } from "../../utils/helper";


class ServicesCard extends HTMLElement {

	constructor() {
		super();
		setupShadow(this, html, css);  
	  }

	async connectedCallback() {
		  this.shadowRoot.querySelector('.text-1').innerHTML = this.getAttribute('title');
		  this.shadowRoot.querySelector('.text-2').innerHTML = this.getAttribute('text');
	      this.shadowRoot.querySelector('.services-card-image').attributes[1].value = this.getAttribute('src');
		  this.shadowRoot.querySelector('.services-card').addEventListener('mouseenter', () => {
			this.shadowRoot.querySelector('.services-card-image').style.transform = 'scale(1.1)';	
		})

		this.shadowRoot.querySelector('.services-card').addEventListener('mouseleave', () => {
			this.shadowRoot.querySelector('.services-card-image').style.transform = 'scale(1)';
		})
        }
  }
  
   customElements.define('services-card', ServicesCard);
   