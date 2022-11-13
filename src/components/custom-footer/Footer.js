import html from "./custom-footer.html";
import css from "./custom-footer.css";
import { scrollObserver, setupShadow } from "../../utils/helper";

class Footer extends HTMLElement {

	constructor() {
		super();
		setupShadow(this, html, css);  
	  }

	  async connectedCallback(){

		fetch('http://localhost:3001/properties').then(res => res.json()).then((res) => fetchResponse(res, this.shadowRoot))

		function fetchResponse(data, shadow) {

		shadow.querySelector('.footer-section-1-left-text').innerHTML = 
		data?.slice(0, 1)?.map(el => `${JSON.parse(JSON.stringify((el.footer.descriptionLeft)))}`)


		shadow.querySelector('.footer-section-1-right').innerHTML = 
		data?.slice(0, 1)?.map(el => `${JSON.parse(JSON.stringify((el.footer.descriptionRight)))}`)


		shadow.querySelector('.footer-section-2').innerHTML = `<ul>
		${data?.slice(0, 1)?.map(el => el.footer.secondSectionList.map(listItems => `<li> ${listItems} </li>`).join(""))} </ul>`


		shadow.querySelector('.footer-section-3').innerHTML = `<div>
		${data?.slice(0, 1)?.map(el => el.footer.disclaimerText)} </div>`


		shadow.querySelector('.footer-section-4').innerHTML = `<div>
		${data?.slice(0, 1)?.map(el => el.footer.copyrightText)} </div>`


		scrollObserver('.footer-section-1-left', 'animate-footer-sec-1-left', shadow)
		scrollObserver('.footer-section-1-right', 'animate-footer-sec-1-right', shadow)
		scrollObserver('.footer-section-2', 'animate-footer-sec-2', shadow)
		scrollObserver('.footer-section-3', 'animate-footer-sec-3', shadow)
		scrollObserver('.footer-section-4', 'animate-footer-sec-4', shadow)

		
	
	  
		}}
}

customElements.define('custom-footer', Footer);
