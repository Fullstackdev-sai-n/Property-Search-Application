import html from "./explore-card.html";
import css from "./explore-card.css";
import { setupShadow } from "../../utils/helper";


class ExploreCard extends HTMLElement {

  constructor() {
	  super();
	  setupShadow(this, html, css);   
	}

    async connectedCallback() {
     
          this.shadowRoot.querySelector('.explore-card-city').innerHTML = this.getAttribute('city');
          this.shadowRoot.querySelector('.explore-card-price').innerHTML = this.getAttribute('price');
          this.shadowRoot.querySelector('.rating').innerHTML = this.getAttribute('rating');
          this.shadowRoot.querySelector('.review').innerHTML = this.getAttribute('reviews')
          this.shadowRoot.querySelector('.explore-card-count').innerText = this.getAttribute('count')
          
    }
  }
  
  customElements.define('explore-card', ExploreCard);
  