class ServicesCard extends HTMLElement {

	async connectedCallback() {
	  let res = await fetch( './templates/components/service-card-template.html')
	  this.attachShadow( { mode: 'open' } )
		  .innerHTML = await res.text()
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
   