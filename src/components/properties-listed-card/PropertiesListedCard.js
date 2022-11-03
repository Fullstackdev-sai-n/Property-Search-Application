import html from "./properties-listed-card.html";
import css from "./properties-listed-card.css";
import { setupShadow } from "../../utils/helper";

class PropertiesListedCard extends HTMLElement {


	constructor() {
		super();
		setupShadow(this, html, css);  
	  }


	async connectedCallback() {
	 
		  this.shadowRoot.querySelector('.main-section-search-hyd__card').attributes.part.value = this.getAttribute('hydimg-part');
		  this.shadowRoot.querySelector('.main-section-search-hyd__card__text-top-info').innerHTML = this.getAttribute('info');
	      this.shadowRoot.querySelector('.plc-arrow-right').innerHTML = this.getAttribute('frwdtxt');        
        }
  }
  
   customElements.define('properties-listed-card', PropertiesListedCard);
   