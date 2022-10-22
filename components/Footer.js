class Footer extends HTMLElement {

	async connectedCallback() {
		let res = await fetch('./templates/components/footer-template.html')
		this.attachShadow({ mode: 'open' })
			.innerHTML = await res.text()
		this.shadowRoot.querySelector('.main-section-featured__content__card__text__desc_name').innerHTML = this.getAttribute('title');
        
		

	}	
}

customElements.define('custom-footer', Footer);
