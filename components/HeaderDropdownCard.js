class HeaderDropdownCard extends HTMLElement {

	async connectedCallback() {
		let res = await fetch('./templates/components/header-dropdown-template.html')
		this.attachShadow({ mode: 'open' })
			.innerHTML = await res.text()
		this.shadowRoot.querySelector('.main-sheader-dropdown-template.htmlection-featured__content__card__text__desc_name').innerHTML = this.getAttribute('title');
        
		

	}	
}

customElements.define('header-dropdown-card', HeaderDropdownCard);
