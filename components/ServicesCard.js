class ServicesCard extends HTMLElement {

	async connectedCallback() {
	  let res = await fetch( './templates/components/service-card-template.html')
	  this.attachShadow( { mode: 'open' } )
		  .innerHTML = await res.text()
		//   this.shadowRoot.querySelector('.heading').innerHTML = this.getAttribute('title');
		  this.shadowRoot.querySelector('.text-2').innerHTML = this.getAttribute('text');
	      this.shadowRoot.querySelector('.services-card-image').attributes[1].value = this.getAttribute('src');
        }
  }
  
   customElements.define('services-card', ServicesCard);
   