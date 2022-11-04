import html from "./custom-footer.html";
import css from "./custom-footer.css";
import { scrollObserver, setupShadow } from "../../utils/helper";
import data from "../../utils/data.json"

class Footer extends HTMLElement {

	constructor() {
		super();
		setupShadow(this, html, css);  
	  }

	  async connectedCallback(){

		this.shadowRoot.querySelector('.footer-section-1-left-text').innerHTML = 
		data?.slice(0, 1)?.map(el => `${JSON.parse(JSON.stringify((el.footer.descriptionLeft)))}`)


		this.shadowRoot.querySelector('.footer-section-1-right').innerHTML = 
		data?.slice(0, 1)?.map(el => `${JSON.parse(JSON.stringify((el.footer.descriptionRight)))}`)


		this.shadowRoot.querySelector('.footer-section-2').innerHTML = `<ul>
		${data?.slice(0, 1)?.map(el => el.footer.secondSectionList.map(listItems => `<li> ${listItems} </li>`).join(""))} </ul>`


		this.shadowRoot.querySelector('.footer-section-3').innerHTML = `<div>
		${data?.slice(0, 1)?.map(el => el.footer.disclaimerText)} </div>`


		this.shadowRoot.querySelector('.footer-section-4').innerHTML = `<div>
		${data?.slice(0, 1)?.map(el => el.footer.copyrightText)} </div>`


		scrollObserver('.footer-section-1-left', 'animate-footer-sec-1-left', this.shadowRoot)
		scrollObserver('.footer-section-1-right', 'animate-footer-sec-1-right', this.shadowRoot)
		scrollObserver('.footer-section-2', 'animate-footer-sec-2', this.shadowRoot)
		scrollObserver('.footer-section-3', 'animate-footer-sec-3', this.shadowRoot)
		scrollObserver('.footer-section-4', 'animate-footer-sec-4', this.shadowRoot)

		
	
	  }
}

customElements.define('custom-footer', Footer);
