import html from "./gallery-card.html";
import css from "./gallery-card.css";
import { setupShadow } from "../../utils/helper";


class GalleryCard extends HTMLElement {
	constructor() {
		super();
		setupShadow(this, html, css);  
	  }

	async connectedCallback() {
		  this.shadowRoot.querySelector('.pgc-image').attributes[1].value = this.getAttribute('pgcimage');
		  this.shadowRoot.querySelector('.pgc-title').innerHTML = this.getAttribute('title');
		  this.shadowRoot.querySelector('.pgc-area').innerHTML = this.getAttribute('area');
		  this.shadowRoot.querySelector('.pgc-flats').innerHTML = this.getAttribute('flats');
		  this.shadowRoot.querySelector('.pgc-price').innerHTML = this.getAttribute('price');
		  this.shadowRoot.querySelector('.pgc-pjcname').innerHTML = this.getAttribute('projectname');
		  this.shadowRoot.querySelector('.pgc-name').innerHTML = this.getAttribute('prname');
		  this.shadowRoot.querySelector('.gallery__card').addEventListener('mouseenter', () => {
			this.shadowRoot.querySelector('.pgc-image').style.transform = 'scale(1.1)';
		})

		this.shadowRoot.querySelector('.gallery__card').addEventListener('mouseleave', () => {
			this.shadowRoot.querySelector('.pgc-image').style.transform = 'scale(1)';
		})
		
		 

        }
  }
  
  customElements.define('gallery-card', GalleryCard);
  
