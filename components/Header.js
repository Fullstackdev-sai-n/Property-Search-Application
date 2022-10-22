const navItems = ['Buy', 'Rent', 'Sell', 'Home Loans', 'Property Services', 'MB Advice', 'Help']
class Header extends HTMLElement {

	async connectedCallback() {
		let res = await fetch('./templates/components/header-template.html');
		
		this.attachShadow({ mode: 'open' })
			.innerHTML = await res.text()
			this.shadowRoot.querySelector('.nav-links-bottom').insertAdjacentHTML('afterbegin', navItems.map(item => {
				return '<li class="nav-items-bottom">' + '<a class="nav-dropdown-bottom">' + item + '</a>' + '<div class="header-dropdown-display">' +
				'<header-dropdown-card>'+' </header-dropdown-card>' +
				'</div>' + '</li>'}).join(''))
				
			this.shadowRoot.querySelectorAll('.nav-items-bottom').forEach((links, index) => {
				links.addEventListener('mouseenter', () => {
					console.log('link enter')
					this.shadowRoot.querySelectorAll('.header-dropdown-display').forEach((el, i) => {
						if(index === i) el.style.display = 'grid'
						if(index === 4) el.style.left =  '-100%'
						if(index === 5) el.style.left =  '-200%'
					})
				})
			})
			this.shadowRoot.querySelectorAll('.nav-items-bottom').forEach((links, index) => {
				links.addEventListener('mouseleave', () => {
					console.log('link enter')
					this.shadowRoot.querySelectorAll('.header-dropdown-display').forEach((el, i) => {
						if(index === i) el.style.display = 'none'
						if(index === 4) el.style.left =  '0'
						if(index === 5) el.style.left =  '0'
					})
				})
			})



		const toggleMenu = this.shadowRoot.querySelector(".hamburger");

			toggleMenu.addEventListener("click", function () {
				const navItemsTop = this.shadowRoot.querySelector(".nav-links");
				const menuAnimateOne = this.shadowRoot.querySelector(".hamburger__line-1");
				const menuAnimateTwo = this.shadowRoot.querySelector(".hamburger__line-2");
				const menuAnimateThree = this.shadowRoot.querySelector(".hamburger__line-3");
				menuAnimateOne.classList.add("hamburger__animate-1");
				menuAnimateTwo.classList.add("hamburger__animate-2");
				menuAnimateThree.classList.add("hamburger__animate-3");

				const styles = getComputedStyle(navItemsTop);
				if (styles.display === "none") {
					navItemsTop.style.display = "grid";
					menuAnimateOne.classList.add("hamburger__animate-1");
					menuAnimateTwo.classList.add("hamburger__animate-2");
					menuAnimateThree.classList.add("hamburger__animate-3");
				} else {
					navItemsTop.style.display = "none";
					menuAnimateOne.classList.remove("hamburger__animate-1");
					menuAnimateTwo.classList.remove("hamburger__animate-2");
					menuAnimateThree.classList.remove("hamburger__animate-3");
					navItemsTop.removeAttribute("style");
				}
			});
			const navItemsTop = this.shadowRoot.querySelector(".nav-links");
			const styles = getComputedStyle(navItemsTop);
			window.innerWidth >= 600 && styles.display === "none"
				? navItemsTop.style.display === "grid"
				: "";
			}	
}


customElements.define('custom-header', Header);
