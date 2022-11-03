import html from "./owner-property-card.html";
import css from "./owner-property-card.css";
import { setupShadow } from "../../utils/helper";


class OwnerPropertyCard extends HTMLElement {

  constructor() {
		super();
		setupShadow(this, html, css);  
	  }
    async connectedCallback() {

          this.shadowRoot.querySelector('.opc-flats').innerHTML = this.getAttribute('flats');
          this.shadowRoot.querySelector('.opc-price').innerHTML = this.getAttribute('price');
          this.shadowRoot.querySelector('.opc-location').innerHTML = this.getAttribute('location');
          this.shadowRoot.querySelector('.opc-status').innerHTML = this.getAttribute('status');
          this.shadowRoot.querySelector('.opc-image').attributes[0].value = this.getAttribute('opcimg');
          this.shadowRoot.querySelector('.opc-card').addEventListener('mouseenter', () => {
            this.shadowRoot.querySelector('.contact-btn-blk').style.display = 'block';
            this.shadowRoot.querySelector('.opc-image').style.transform = 'scale(1.1)';	
          
          })
      
          this.shadowRoot.querySelector('.opc-card').addEventListener('mouseleave', () => {
            this.shadowRoot.querySelector('.contact-btn-blk').style.display = 'none';
            this.shadowRoot.querySelector('.opc-image').style.transform = 'scale(1)';
          })
    }
  }
  
  customElements.define('owner-property-card', OwnerPropertyCard);
