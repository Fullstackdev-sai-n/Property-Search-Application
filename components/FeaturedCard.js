class FeaturedCard extends HTMLElement {

	async connectedCallback() {
	  let res = await fetch( './templates/components/featured-card-template.html')
	  this.attachShadow( { mode: 'open' } )
		  .innerHTML = await res.text()
		  this.shadowRoot.querySelector('.main-section-featured__content__card__text__desc_name').innerHTML = this.getAttribute('title');
		  this.shadowRoot.querySelector('.main-section-featured__content__card__text__desc_by').innerHTML = this.getAttribute('by');
		  this.shadowRoot.querySelector('.main-section-featured__content__card__text__desc_loc').innerHTML = this.getAttribute('loc');
		  this.shadowRoot.querySelector('.main-section-featured__content__card__text__desc_marketed').innerHTML = this.getAttribute('marketed');
		  this.shadowRoot.querySelector('.flats-length').innerHTML = this.getAttribute('flats');
		  this.shadowRoot.querySelector('.price-details-el').innerHTML = this.getAttribute('price');
	}
  }
  
  customElements.define('featured-card', FeaturedCard);
  