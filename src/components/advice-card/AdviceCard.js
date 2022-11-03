import html from "./advice-card.html";
import css from "./advice-card.css";
import { setupShadow } from "../../utils/helper";



class AdviceCard extends HTMLElement {
  constructor() {
	  super();
	  setupShadow(this, html, css);  
	}

  async connectedCallback() {
        this.shadowRoot.querySelector('.advice-text-title').innerHTML = this.getAttribute('title');
        this.shadowRoot.querySelector('.advice-text-desc').innerHTML = this.getAttribute('description');
        this.shadowRoot.querySelector('.advice-card').attributes.part.value = this.getAttribute('content');
        this.shadowRoot.querySelector('.advice-image').attributes.part.value = this.getAttribute('ac-image-part')
        
  }
}


customElements.define('advice-card', AdviceCard)