class ImageOverlayTextCard extends HTMLElement {

	async connectedCallback() {
	  let res = await fetch('./templates/components/image-overlay-text-card-template.html')
	  this.attachShadow( { mode: 'open' } )
		  .innerHTML = await res.text()
		  this.shadowRoot.querySelector('.image-card-text-total').innerHTML = this.getAttribute('number');
		  this.shadowRoot.querySelector('.image-card-text-title').innerHTML = this.getAttribute('title');
	      this.shadowRoot.querySelector('.image-card').style.background = this.getAttribute('imageurl');
        }
  }
  
   customElements.define('image-overlay-text-card', ImageOverlayTextCard);
   