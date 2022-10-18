class PropertiesListedCard extends HTMLElement {

	async connectedCallback() {
	  let res = await fetch( './templates/components/properties-listed-card-template.html')
	  this.attachShadow( { mode: 'open' } )
		  .innerHTML = await res.text()
		  this.shadowRoot.querySelector('.main-section-search-hyd__card').attributes.part.value = this.getAttribute('hydimg-part');
		  this.shadowRoot.querySelector('.main-section-search-hyd__card__text-top-info').innerHTML = this.getAttribute('info');
	      this.shadowRoot.querySelector('.plc-arrow-right').innerHTML = this.getAttribute('frwdtxt');

          console.log(this.shadowRoot)
        
        }
  }
  
   customElements.define('properties-listed-card', PropertiesListedCard);
   