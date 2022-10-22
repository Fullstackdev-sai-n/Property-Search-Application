class Footer extends HTMLElement {

	async connectedCallback() {
		let res = await fetch('./templates/components/footer-template.html')
		this.attachShadow({ mode: 'open' })
			.innerHTML = await res.text()
		
        
		

	}	
}

customElements.define('custom-footer', Footer);
