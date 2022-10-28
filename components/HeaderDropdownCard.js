class HeaderDropdownCard extends HTMLElement {

	async connectedCallback() {
		let res = await fetch('./templates/components/header-dropdown-template.html')
		this.attachShadow({ mode: 'open' })
			.innerHTML = await res.text()
			const jsonData = fetch("./utils/data.json")
			.then((res) => res.json())
			.then((result) => console.log(result))
	
			
			function responseData(data) {
				console.log('Saibaba')
			}
        
		

	}	
}

customElements.define('header-dropdown-card', HeaderDropdownCard);
