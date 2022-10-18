class GuideCard extends HTMLElement {

	async connectedCallback() {
	  let res = await fetch( './templates/components/guide-card-template.html')
	  this.attachShadow( { mode: 'open' } )
		  .innerHTML = await res.text()
		  this.shadowRoot.querySelector('.guide-card-title').innerHTML = this.getAttribute('title');
		  this.shadowRoot.querySelector('.iframe-one').attributes[1].value = this.getAttribute('srcone');
		  this.shadowRoot.querySelector('.iframe-two').attributes[1].value = this.getAttribute('srctwo');
		  this.shadowRoot.querySelector('.guide-card-video-text-1').innerHTML = this.getAttribute('srconeTtext');
		  this.shadowRoot.querySelector('.guide-card-video-text-1').innerHTML = this.getAttribute('srctwotext');
        }
  }
  
  customElements.define('guide-card', GuideCard);
  