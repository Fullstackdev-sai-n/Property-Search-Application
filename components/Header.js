const listElement = document.createElement('li')
listElement.classList.add('nav-items-bottom')
const anchorEl = document.createElement('a')
anchorEl.classList.add('nav-dropdown-bottom');
listElement.appendChild(anchorEl)
const navItems = ['Buy', 'Rent', 'Sell', 'Home Loans', 'Property Services', 'MB Advice', 'Help']
navItems.map((item, i) => {
	listElement.innerText = item
})
class Header extends HTMLElement {

	async connectedCallback() {
		let res = await fetch('./templates/components/header-template.html')
		this.attachShadow({ mode: 'open' })
			.innerHTML = await res.text()
			

			console.log(listElement)



			


	

	}	
}


customElements.define('custom-header', Header);
