import html from "./home-page.html";
import css from "./home-page.css";
import { setupShadow } from "../../utils/helper";
import { Pages } from '../../models/Pages';




export class HomePage extends HTMLElement {
	#goHomeEvent = new CustomEvent("Changepage", { detail: Pages.About });
	constructor() {
	  super();
	  setupShadow(this, html, css);
	  
	}

	

	async connectedCallback(){

		

	fetch("./utils/data.json")
	.then((res) => res.json())
	.then((result) => result)
	.then((res) => fetchResponse(res, this.shadowRoot));

	function fetchResponse(data, shadow) {
	if (!data) return;
	function elementSelector(elIndex, elementData, insertAdjacent = 0) {
		const docSelector = shadow.querySelectorAll(
			".main-section-search-holder__content__headline, .main-section-search-holder__content__input-heads__list, .main-section-search-hyd__cards,.hnp-categories-block, .hnp-diplay-cards-block, .hnp-diplay-cards-block, .main-section-featured__content,.main-section-image-cards-wrapper,.main-section-property_services_cards-wrapper,.main-section-new-project-gallery-cards,.main-section-popular-cities-cards-wrapper,.main-section-owner-properties-cards,.main-section-advice-tools__card-wrapper,.main-section-real-estate-guide-cards_wrapper,.main-section-hyd-prop-snapshot-content_desc,.main-section-hyd-prop-snapshot-content_total-projects,.main-section-post-your-property-text,.main-section-post-your-property-text,.main-section-browse-projects-cities,.main-section-recommended-catergories,.main-section-recommended-catergories-details,.rc-heads-top, .main-section-showcase__images"
		);

		const elementResult =
			insertAdjacent !== 0 || null || undefined
				? docSelector[elIndex].insertAdjacentHTML('beforeend', insertAdjacent)
				: (docSelector[elIndex].innerHTML = elementData);
		return elementResult;
	}

	function dataSlice(index) {
		const response = data?.slice(0, index);
		return response;
	}



	elementSelector(0, dataSlice(1).map((apiData) => `
	${apiData?.hero?.heading}
	`))



	elementSelector(1, dataSlice(1).map((apiData) => apiData?.hero?.content?.map((list) =>  `
		<li
		class="main-section-search-holder__content__input-heads__list-items">
		<a href='#'>${list?.name}</a>
		</li>
		`
	).join("")))


	elementSelector(
		2,
		dataSlice(4)
			.map(
				(apiData) => `<properties-listed-card
						hydimg-part="${apiData?.propertiesListed?.image}"
						info="${apiData?.propertiesListed?.text}"
						frwdtxt="${apiData?.propertiesListed?.arrowText}">
					</properties-listed-card>`
			)
			.join("")
	);

	elementSelector(
		4,
		dataSlice(2)
			.map((apiData) => {
				return `<featured-card title="${apiData.name}"
					by="${apiData.by}"
					loc="${apiData.loc}"
					marketed="${apiData.marketedby}"
					flats="${apiData.size}"
					price="${apiData.price}"> </featured-card>`;
			})
			.join("")
	);

	elementSelector(
		5,
		dataSlice(4)
			?.map((apiData, index) => {
				return `<sideicon-with-text
						side-icon="before-icon-${index}"
						it-text="${apiData.launchText}"
						it-caption="${apiData.launchCaption}"				
						> </sideicon-with-text>`;
			})
			.join("")
	);

	elementSelector(
		6,
		dataSlice(2)
			?.map((apiData, index) => {
				return `<handpicked-project-card
							imagemain="${apiData.imageUrl}"
							projecttitle="${apiData.name}"
							marketedby="${apiData.marketedby}"
							price="${apiData.price}"
							thumbnail="${apiData.imageUrl}"
							thunmbnailtext="${apiData.status}"
							showcount="15 More"				
						> </handpicked-project-card>`;
			})
			.join("")
	);

	elementSelector(
		7,
		dataSlice(4)
			?.map((apiData, index) => {
				return `<image-overlay-text-card 
									number="${apiData.count}"
									title="${apiData.name}"
									imageurl="url(${apiData.imageUrl})"
									> </image-overlay-text-card>`;
			})
			.join("")
	);

	elementSelector(
		8,
		dataSlice(4)
			?.map((apiData, index) => {
				return `<services-card
									text="${apiData.body}"
									title="${apiData.name}"
									src="${apiData.imageUrl}"
									> </services-card>`;
			})
			.join("")
	);

	elementSelector(
		9,
		dataSlice(6)
			?.map((apiData, index) => {
				return `<gallery-card
						pgcimage="${apiData.imageUrl}"
						title="${apiData.name}"
						area="${apiData.loc}"
						flats="${apiData.size}"
						price="${apiData.price}"
						projectname="${apiData.marketedby}"
						prname="${apiData.name}"
									> </gallery-card>`;
			})
			.join("")
	);

	elementSelector(
		10,
		null,
		dataSlice(3)
			?.map((apiData, index) => {
				return `<explore-card
						city="${apiData.city}"
						price="${apiData.price}"
						rating="${apiData.rating}"
						reviews="${apiData.count}"
						count="${apiData.count}"
									> </explore-card>`;
			})
			.join("")
	);

	elementSelector(
		11,
		dataSlice(4)
			?.map((apiData, index) => {
				return `<owner-property-card
						opcimg="${apiData.imageUrl}"
						status="${apiData.status}"
						location="${apiData.loc}"
						flats="${apiData.size}"
						price="${apiData.price}"
					
									> </owner-property-card>`;
			})
			.join("")
	);

	elementSelector(
		12,
		dataSlice(4)
			?.map((apiData, index) => {
				return `<advice-card
						title="${apiData.name}"
						description="${apiData.body}"
						ac-image-part="logo-image-${index}"
						content="dynamic-content-${index}"
									> </advice-card>`;
			})
			.join("")
	);

	elementSelector(
		13,
		dataSlice(3)
			?.map((apiData, index) => {
				return `<guide-card
						title="${apiData.name}"
						srconetext="${apiData.body}"
						srctwotext="${apiData.body}"
						gc-show-videoblock="${index === 0 && "grid"}"
						gc-show-insightsblock="${index === 1 && "grid"}"
						gc-show-updatesblock="${index === 2 && "block"}"
									> </guide-card>`;
			})
			.join("")
	);

	elementSelector(
		14,
		dataSlice(1)
			?.map((apiData, index) => {
				return `${apiData?.propertysnapshot?.description}`;
			})
			.join("")
	);

	elementSelector(
		15,
		dataSlice(4)
			?.map((apiData, index) => {
				return `<div
						class="main-section-hyd-prop-snapshot-content_total-projects-1">
						<span>${apiData?.propertysnapshot?.totalCount}</span><br/> 
						<span>${apiData?.propertysnapshot?.budgetInfo}</span><br/> 
						<span>${apiData?.propertysnapshot?.city}</span></div>`;
			})
			.join("")
	);

	elementSelector(
		16,
		dataSlice(1)
			?.map((apiData, index) => {
				return `${JSON.parse(JSON.stringify(apiData.postProperty))}`;
			})
			.join("")
	);

	elementSelector(
		17,
		`<ul class="nph-citynames-list"> 
				${dataSlice(1).map((apiData, index) => {
					return apiData.newprojects.content
						.map(
							(city, cityIndex) =>
								'<li class="nph-citynames">' + city.name + "</li>"
						)
						.join("");
				})} </ul>`
	);

	const cityNames = shadow.querySelectorAll(".nph-citynames");
	cityNames.forEach(function (city, index) {
		const projectElementSelector = shadow.querySelector(
			".main-section-browse-projects-project-names"
		);
		function projectNamesInnerText(index) {
			return `${data.slice(0, 1).map((projectnames) =>
				projectnames?.newprojects?.content[index].selection
					.map((projectnames) => {
						return "<div>" + projectnames.name + "</div>";
					})
					.join("")
			)}`;
		}
		projectElementSelector.innerHTML = projectNamesInnerText(0);

		city.addEventListener("click", () => {
			projectElementSelector.innerHTML = projectNamesInnerText(index);
		});
	});

	elementSelector(
		18,
		` ${dataSlice(1).map((apiData, index) => {
			return apiData.recommended.content
				.map(
					(catergoryheading) =>
						'<div class="rc-heads-top">'+'<span class="">' + '</span>' + catergoryheading.name + "</div>"
				)
				.join("");
		})}`
	);

	const cheads = shadow.querySelectorAll(".rc-heads-top");
	const cheadsContainer = shadow.querySelector('.main-section-recommended-catergories')

		
	

	cheadsContainer.addEventListener('click', () => {
		cheads.querySelector('span').classList.add('rc-heads-top-underline-click')
	})

	cheads.forEach(function (categories, index) {
		const catergoryDetailsEl = shadow.querySelector('.main-section-recommended-catergories-details')
		categories.addEventListener('mouseenter', function(){
		categories.querySelector('span').classList.add('rc-heads-top-underline')
		})
		categories.addEventListener('mouseleave', function(){
		categories.querySelector('span').classList.remove('rc-heads-top-underline')
		})
		function categoryNamesInnerText(index) {
			return `${dataSlice(1).map((categorynames) =>
				categorynames?.recommended?.content[index].selection
					.map((category) => {
						return "<div>" + category.name + "</div>";
					})
					.join("")
			)}`;
		}
		catergoryDetailsEl.innerHTML = categoryNamesInnerText(0)
		categories.addEventListener("click", function(){
			
			catergoryDetailsEl.innerHTML = categoryNamesInnerText(index)

			
		});

		
	});
}

function changeBg(shadow) {
	const fadeImages = shadow.querySelector(".main-section-showcase__images");
	const images = [
		'url("./assets/showcase1.jpg")',
		'url("./assets/showcase2.jpg")',
		'url("./assets/showcase3.jpg")',
	];
	const bg = images[Math.floor(Math.random() * images.length)];
	fadeImages.style.backgroundImage = bg;
}
setInterval(changeBg(this.shadowRoot), 2000);

	}

	back() {
		this.dispatchEvent(this.#goHomeEvent)
	}
}

