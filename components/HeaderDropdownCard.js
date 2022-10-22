class HeaderDropdownCard extends HTMLElement {

	async connectedCallback() {
		let res = await fetch('./templates/components/header-dropdown-template.html')
		this.attachShadow({ mode: 'open' })
			.innerHTML = await res.text()
		
        
		

	}	
}

customElements.define('header-dropdown-card', HeaderDropdownCard);
