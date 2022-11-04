import html from "./custom-header.html";
import css from "./custom-header.css";
import { setupShadow } from "../../utils/helper";
import json from "../../utils/data.json";

class Header extends HTMLElement {

	constructor() {
		super();
		setupShadow(this, html, css);  
	  }

	async connectedCallback() {
		
		// fetch(json)
		// 	.then((res) => res.json())
		// 	.then((response) => dataResponse(response, this.shadowRoot)); api integration code.


		dataResponse(json, this.shadowRoot)
		function dataResponse(data, shadow) {	
			const slicedData = data.slice(0, 1).map((res) => res);
			
			Array.from(shadow.querySelectorAll(".nav-items-dropdown-link")).map((forEach, index) => forEach.innerHTML = 
				`<a class="nav-dropdown" href="#"> ${slicedData[0]?.tophovernav[index].name} </a>
							<div class="top-nav-dropdown"></div>`
				)

				const navTopheads = shadow.querySelectorAll(".nav-items-dropdown-link");
				
				navTopheads.forEach(function (heads, index) {
					heads.addEventListener("mouseenter", function () {
	
							Array.from(
								shadow.querySelectorAll(".top-nav-dropdown"))[index].innerHTML =  `  
						<div class="hd-topnav-list-container">
						 ${
							
							slicedData?.map((res) =>
								res?.tophovernav[index]?.content.map(
									(response) => {  
										const colHeadingName = response?.name !== undefined ? response?.name : ''								
										return 	`<div class="hd-topnav-list-block hd-topnav-list-block-${index}">
										<div class="hd-topnav-heading hd-topnav-heading-${index}">
										${colHeadingName}
										 </div> <div class="hd-topnav-list-items-list hd-topnav-list-items-list-${index}">
										 ${response?.selection?.map(
											(responseDesc) =>   `<div class="hd-topnav-list-item hd-topnav-list-item-${index}"> ${responseDesc.name} </div>` 
										).join("")}</div></div>`}
								).join("")
							).join("") 
							
						}
						</div>`
						Array.from(shadow.querySelectorAll(".top-nav-dropdown"))[2].style.cssText = `width: 175px; top: 48px;`;
						Array.from(shadow.querySelectorAll(".top-nav-dropdown"))[1].style.cssText = `width: 175px; top: 48px`;
						Array.from(shadow.querySelectorAll(".top-nav-dropdown"))[0].style.cssText = `width: 80vw; top: 48px; left: -15vw;`;
					
					
					
					});

					heads.addEventListener("mouseleave", function () {
							Array.from(
								shadow.querySelectorAll(".top-nav-dropdown"))[index].innerHTML = ''
					});
	
					
				});
				
			shadow.querySelector(".nav-links-bottom").insertAdjacentHTML(
			"afterbegin",
			slicedData[0]?.hovernav?.map((item, index) => {
					return `<li class="nav-items-bottom"> 
				<a class="nav-dropdown-bottom"> ${item.name} </a><div class="dropdown-bottom"></div></li>`;
				})
				.join("")
		);

		const navBottomheads = shadow.querySelectorAll(".nav-items-bottom");

		
			navBottomheads.forEach(function (heads, index) {

		

			if(index !== 7) heads.addEventListener("mouseenter", function () {
				
						Array.from(
							shadow.querySelectorAll(".dropdown-bottom"))[index].innerHTML =  `  
					<div class="hd-list-container">
				 	${
						
						slicedData?.map((res) =>
							res?.hovernav[index]?.content.map(
								(response) => {  
									const colHeadingName = response?.name !== undefined ? response?.name : ''								
									return '<div class="hd-list-block">'+
									'<div class="hd-col-heading">' +
									colHeadingName
									 + "</div>" + '<div class="hd-list-items-list">' +
									 response?.selection?.map(
										(responseDesc) =>   '<div class="hd-list-item">' + responseDesc.name + "</div>"  
									).join("") +  '</div>' + '</div>'}
							).join("")
						).join("") 
						
					}
					</div>`
					Array.from(shadow.querySelectorAll(".dropdown-bottom"))[4].style.left = '-20vw'
					Array.from(shadow.querySelectorAll(".dropdown-bottom"))[5].style.left = '-50vw'
					Array.from(shadow.querySelectorAll(".dropdown-bottom"))[6].style.width = '180px'
					

				
				});

				
				
				if(index !== 7)	heads.addEventListener("mouseleave", function () {

						Array.from(
							shadow.querySelectorAll(".dropdown-bottom"))[index].innerHTML = ''
				});

				
			});
		}





















		this.shadowRoot
			.querySelector(".toggle-arrow-nav")
			.addEventListener("mouseenter", () => {
				Array.from(
					this.shadowRoot.querySelectorAll(".nav-items-bottom")
				).forEach((navs) => {
					navs.style.display = "flex";
				});
				this.shadowRoot.querySelector(".toggle-arrow-nav").style.display =
					"none";
			});
		this.shadowRoot
			.querySelector(".toggle-arrow-nav")
			.addEventListener("mouseleave", () => {
				Array.from(
					this.shadowRoot.querySelectorAll(".nav-items-bottom")
				).forEach((navs) => {
					if (window.screen.width >= 960 || window.screen.width <= 600) {
						navs.style.display = "none";
					}
				});
			});


		const toggleMenu = this.shadowRoot.querySelector(".hamburger");
		const navItemsTop = this.shadowRoot.querySelector(".nav-links");
		const menuAnimateOne = this.shadowRoot.querySelector(".hamburger__line-1");
		const menuAnimateTwo = this.shadowRoot.querySelector(".hamburger__line-2");
		const menuAnimateThree =
			this.shadowRoot.querySelector(".hamburger__line-3");
		const navItemEmpty = this.shadowRoot.querySelector(".nav-items-empty");

		toggleMenu.addEventListener("click", function () {
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
		const styles = getComputedStyle(navItemsTop);
		window.innerWidth >= 600 && styles.display === "none"
			? navItemsTop.style.display === "grid"
			: "";
	}
}

customElements.define("custom-header", Header);
