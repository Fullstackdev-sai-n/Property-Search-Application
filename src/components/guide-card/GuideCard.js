import html from "./guide-card.html";
import css from "./guide-card.css";
import { setupShadow } from "../../utils/helper";


class GuideCard extends HTMLElement {

	constructor() {
		super();
		setupShadow(this, html, css);  
	  }

	async connectedCallback() {
		  this.shadowRoot.querySelector('.guide-card-title').innerHTML = this.getAttribute('title');
		  this.shadowRoot.querySelector('.guide-card-video-text-1').innerHTML = this.getAttribute('srconetext');
		  this.shadowRoot.querySelector('.guide-card-video-text-2').innerHTML = this.getAttribute('srctwotext');
		  this.shadowRoot.querySelector('.gc-btn').style.display = this.getAttribute('gcbtn');
		  this.shadowRoot.querySelector('.guide-card-videos-container').style.display = this.getAttribute('gc-show-videoblock');
		  this.shadowRoot.querySelector('.gc-insights-block').style.display = this.getAttribute('gc-show-insightsblock');
		  this.shadowRoot.querySelector('.guide-card-legal-updates-block').style.display = this.getAttribute('gc-show-updatesblock');
		  
		  

		 const navBulletsContainer = this.shadowRoot.querySelector('.guide-card-bullets-block')
		 for (let index = 0; index < 8; index++) {
			navBulletsContainer.innerHTML += `<span class="guide-card-bullet"></span>`	
		 }
		  const insightsContainer = this.shadowRoot.querySelector('.gc-insights-block')
		 for (let index = 0; index < 5; index++) {
			insightsContainer.innerHTML += `<div class="gc-insights-play-text">
			What RERA Carpet Area Means and How is it Calculated..
		</div>`
			
		 }
		  const updatesContainer = this.shadowRoot.querySelector('.guide-card-legal-updates-block')
		 for (let index = 0; index < 2; index++) {
			updatesContainer.innerHTML += `<div class="gc-updates-block gc-updates-block-${index}">
			<div class="gc-updates-block-image-sec gc-updates-block-image-sec-${index}">
				<img
					class="gc-updates-block-image gc-updates-block-image-${index}"
					src="https://properties-search.s3.ap-south-1.amazonaws.com/assets/project-1.jpg"
					alt="updates-image" />
			</div>
			<div class="gc-updates-block-text gc-updates-block-text-${index}">
				Tranfer of propperty Act
				<arrow-right><span slot="arrow-text">Read article</span></arrow-right>
			</div>
		</div>`


			
		 }


        }
  }
  
  customElements.define('guide-card', GuideCard);
  