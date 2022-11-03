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

        }
  }
  
  customElements.define('guide-card', GuideCard);
  