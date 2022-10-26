class GuideCard extends HTMLElement {

	async connectedCallback() {
	  let res = await fetch( './templates/components/guide-card-template.html')
	  this.attachShadow( { mode: 'open' } )
		  .innerHTML = await res.text()
		  this.shadowRoot.querySelector('.guide-card-title').innerHTML = this.getAttribute('title');
		//   this.shadowRoot.querySelector('.iframe-one').attributes[1].value = this.getAttribute('srcone');
		//   this.shadowRoot.querySelector('.iframe-two').attributes[1].value = this.getAttribute('srctwo');
		  this.shadowRoot.querySelector('.guide-card-video-text-1').innerHTML = this.getAttribute('srconetext');
		  this.shadowRoot.querySelector('.guide-card-video-text-2').innerHTML = this.getAttribute('srctwotext');
		  this.shadowRoot.querySelector('.gc-btn').style.display = this.getAttribute('gcbtn');
		  this.shadowRoot.querySelector('.guide-card-videos-container').style.display = this.getAttribute('gc-show-videoblock');
		  this.shadowRoot.querySelector('.gc-insights-block').style.display = this.getAttribute('gc-show-insightsblock');
		  this.shadowRoot.querySelector('.guide-card-legal-updates-block').style.display = this.getAttribute('gc-show-updatesblock');

        }
  }
  
  customElements.define('guide-card', GuideCard);
  