import html from "./home-page.html";
import css from "./home-page.css";
import { scrollObserver, setupShadow } from "../../utils/helper";
import { Pages } from "../../models/Pages";



export class HomePage extends HTMLElement {
	#goHomeEvent = new CustomEvent("Changepage", { detail: Pages.About });

	
	constructor() {
		super();
		setupShadow(this, html, css);	
	

		console.log(window.location.origin + window.location.pathname)
	}

	async connectedCallback() {

		
		fetch('http://localhost:3001/properties').then(res => res.json()).then((res) => fetchResponse(res, this.shadowRoot))

		function fetchResponse(data, shadow) {

			if (!data) return;
			shadow.querySelector('arrow-right').addEventListener('click', () => {
				console.log('i am arrow and clicked!')
			})
			shadow.querySelector('.main-section-project-gallery__content').style.backgroundImage= `url(${dataSlice(1).map(data => data.projectsInfo[0].imageUrl)})`
			function elementSelector(elIndex, elementData, insertAdjacent = 0) {
				const docSelector = shadow.querySelectorAll(
					".main-section-search-holder__content__headline, .main-section-search-holder__content__input-heads__list, .main-section-search-hyd__cards,.hnp-categories-block, .hnp-diplay-cards-block, .hnp-diplay-cards-block, .main-section-featured__content,.main-section-image-cards-wrapper,.main-section-property_services_cards-wrapper,.main-section-new-project-gallery-cards,.main-section-popular-cities-cards-wrapper,.main-section-owner-properties-cards,.main-section-advice-tools__card-wrapper,.main-section-real-estate-guide-cards_wrapper,.main-section-hyd-prop-snapshot-content_desc,.main-section-hyd-prop-snapshot-content_total-projects,.main-section-post-your-property-text,.main-section-post-your-property-text,.main-section-browse-projects-cities,.main-section-recommended-catergories,.main-section-recommended-catergories-details,.rc-heads-top, .main-section-showcase__images"
				);

				const elementResult =
					insertAdjacent !== 0 || null || undefined
						? docSelector[elIndex].insertAdjacentHTML(
							"beforeend",
							insertAdjacent
						)
						: (docSelector[elIndex].innerHTML = elementData);
				return elementResult;
			}

			function dataSlice(index) {
				const response = data?.slice(0, index);
				return response;
			}

			function showLineBottom(shadow) { }

			showLineBottom(shadow);

			Array.from(shadow.querySelectorAll("section-heading")).map(
				(heading, index) =>
				(heading.shadowRoot.querySelector(".heading").innerHTML = dataSlice(
					1
				).map((el) => `${el?.heading[index]?.name}`))
			);

			shadow.querySelector(".main-section-showcase__images").insertAdjacentHTML(
				"afterbegin",
				`
		<ul class="main-section-showcase__category__item-list"> ${dataSlice(1)
					.map((apiData) =>
						apiData?.showcase?.content
							.map(
								(category, i) => `
		<li  class="main-section-showcase__category__item main-section-showcase__category__item--${i}">
		${category.title}
		</li>`
							)
							.join("")
					)
					.join("")}
		
		</ul>`
			);

			Array.from(
				shadow.querySelectorAll(".main-section-showcase__category__item")
			).map((entry, index) => {
				entry.addEventListener("mouseenter", () => {
					shadow
						.querySelector(".main-section-showcase__images")
						.insertAdjacentHTML(
							"afterbegin",
							dataSlice(1).map((apiData) => {

								const overview = apiData.showcase.content[0];
								const gallery = apiData.showcase.content[1];
								const location = apiData.showcase.content[2];
								const projectDetails = apiData.showcase.content[3];
								const projecAminities = apiData.showcase.content[4];
								const aboutBuilder = apiData.showcase.content[5];

								const index0 = `<div class="sc-category-details-one sc-category-details-block">
												<div class="sc-category-details-one__wrapper">
												<div class="sc-category-details-one__propertyid">${overview.selection[1]?.value}</div>
												<div class="sc-category-details-one__title">${overview.selection[2]?.value}</div>
												<div class="sc-category-details-one__location">${overview.selection[3]?.value}</div>
												<div cla ss="sc-category-details-one__size">${overview.selection[4]?.value}</div>
												<div class="sc-category-details-one__date">${overview.selection[5]?.value}</div>
												<div class="sc-category-details-one__marketed">${overview.selection[6]?.value}</div>
											</div>
												</div>`;

								const index1 = `<div class="sc-category-details-two sc-category-details-block">
		<div class="sc-category-details-two__wrapper">
		<div class="sc-category-details-two__propertyid">${gallery.selection[0]?.value}</div>
		<div class="sc-category-details-two__title">${gallery.selection[1]?.value}</div>
		<div class="sc-category-details-two__location">${gallery.selection[2]?.value}</div>
		<div class="sc-category-details-two__size">${gallery.selection[3]?.value}</div>
		<div class="sc-category-details-two__marketed">${gallery.selection[4]?.value}</div>
	</div>
		</div>`;

								const index2 = `<div class="sc-category-details-three sc-category-details-block">
		<div class="sc-category-details-three__wrapper">
			<div class="sc-category-details-three__title">${location.selection[0]?.value}</div>
			<div class="sc-category-details-three__subtitle">${location.selection[1]?.value
									}</div>
			<ul class="sc-category-details-three__advantages-list">${location.selection[2]?.value
										.map(
											(el) =>
												`<li class="sc-category-details-three__advantages"> ${el} </li>`
										)
										.join("")}</ul>
		</div>
		</div>`;

								const index3 = `<div class="sc-category-details-four sc-category-details-block">
		<div class="sc-category-details-four__wrapper">
		<div class="sc-category-details-four__title">${projectDetails.selection[0]?.value}</div>
		<div class="sc-category-details-four__subtitle">${projectDetails.selection[1]?.value}</div>
		<img class="sc-category-details-four__logo" src="${projectDetails.selection[2]?.value}"/>
		<div class="sc-category-details-four__desc">${projectDetails.selection[3]?.value}</div>
		<div class="sc-category-details-four__date">${projectDetails.selection[4]?.value}</div>
		<div class="sc-category-details-four__space">${projectDetails.selection[5]?.value}</div>
		</div>
		</div>`;

								const index4 = `<div class="sc-category-details-five sc-category-details-block">
		<div class="sc-category-details-five__wrapper">
			<div class="sc-category-details-five__title">${projecAminities.selection[0]?.value
									}</div>
			<ul class="sc-category-details-five__ameninties-list">${projecAminities.selection[1]?.value
										.map(
											(el) =>
												`<li class="sc-category-details-five__ameninties"> ${el} </li>`
										)
										.join("")}</ul>
		</div>
		</div>`;

								const index5 = `<div class="sc-category-details-six sc-category-details-block">
		<div class="sc-category-details-six__wrapper">
			<img class="sc-category-details-six__image" src="${aboutBuilder.selection[0]?.value}"/>
			<div class="sc-category-details-six__desc"><div>${aboutBuilder.selection[1]?.value}</div></div>
		</div>
		</div>`;
								return index === 0
									? index0
									: index === 1
										? index1
										: index === 2
											? index2
											: index === 3
												? index3
												: index === 4
													? index4
													: index === 5
														? index5
														: "";
							})
						);
				});
			});

			Array.from(
				shadow.querySelectorAll(".main-section-showcase__category__item")
			).map((entry, index) => {
				entry.addEventListener("mouseleave", () => {
					Array.from(shadow.querySelectorAll(".sc-category-details-block")).map(
						(entry) => {
							entry.style.display = "none";
						}
					);
				});
			});

			elementSelector(
				0,
				dataSlice(1).map(
					(apiData) => `
	${apiData?.hero?.heading}
	`
				)
			);

			shadow.querySelector('.main-section-project-gallery__content__heading-btn').innerHTML = dataSlice(1).map(data => `${data.projectGallery.title}`)
			shadow.querySelector('.main-section-project-gallery__content__desc-btn__desc--flats').innerHTML = dataSlice(1).map(data => `${data.projectGallery.flatesPlace}`)
			shadow.querySelector('.main-section-project-gallery__content__desc-btn__desc--starting-price').innerHTML = dataSlice(1).map(data => `${data.projectGallery.startingPrice}`)
			shadow.querySelector('.main-section-project-gallery__content__desc-btn__desc--marketed-by').innerHTML = dataSlice(1).map(data => `${data.projectGallery.marketedBy}`)


			elementSelector(
				1,
				dataSlice(1).map((apiData) =>
					apiData?.hero?.content
						?.map(
							(list, index) => `
		<li
		class="main-section-search-holder__content__input-heads__list-items main-section-search-holder__content__input-heads__list-items-${index}">
		<a>${list?.name}</a>
		</li>
		`
						)
						.join("")
				)
			);

			elementSelector(
				2,
				dataSlice(1)
					.map(
						(apiData, i) => apiData.propertiesListed?.map((entry, index)=> `<properties-listed-card
						hydimg-part="${entry?.image}"
						info="${entry?.text}"
						frwdtxt="${entry?.arrowText}"
						class="properties-listed-card-${index}"
						>
					</properties-listed-card>`).join("")
					)
					.join("")
			);

			elementSelector(
				4,
				dataSlice(1)
					.map((apiData) => {
						return apiData.projectsInfo?.slice(0, 2)?.map((entry, index)=>`<featured-card title="${entry?.name}"
					by="${entry?.by}"
					loc="${entry?.loc}"
					marketed="${entry?.marketedby}"
					flats="${entry?.size}"
					price="${entry?.price}"
					imageUrl="${entry?.imageUrl}"
					class="featured-card-${index}"
					> </featured-card>`).join("")
					})
					.join("")
			);

			elementSelector(
				5,
				dataSlice(1)
					?.map((apiData, i) => {
						return apiData.projectsInfo?.slice(0, 4)?.map((entry, index)=> `<sideicon-with-text
						side-icon="before-icon-${index}"
						it-text="${entry?.launchText}"
						it-caption="${entry?.launchCaption}"
						class="side-icon-text-card-${index}"				
						> </sideicon-with-text>`).join("")
					})
					.join("")
			);

			elementSelector(
				6,
				dataSlice(1)
					?.map((apiData, i) => {
						return apiData.projectsInfo?.slice(0, 2)?.map((entry, index)=> `<handpicked-project-card
							imagemain="${entry?.imageUrl}"
							projecttitle="${entry?.name}"
							marketedby="${entry?.marketedby}"
							price="${entry?.price}"
							thumbnail="${entry?.imageUrl}"
							thunmbnailtext="${entry?.status}"
							showcount="15 More"
							class="hnp-card-${index}"			
						> </handpicked-project-card>`).join("")
					})
					.join("")
			);

			elementSelector(
				7,
				dataSlice(1)
					?.map((apiData, i) => {
						return apiData.projectsInfo?.slice(0, 4)?.map((entry, index)=>`<image-overlay-text-card 
									number="${entry?.forSaleCount}"
									title="${entry?.name}"
									imageurl="url(${entry?.imageUrl})"
									class="image-overlay-text-card-${index}"
									> </image-overlay-text-card>`).join("")
					})
					.join("")
			);

			elementSelector(
				8,
				dataSlice(1)
					?.map((apiData, i) => {

						return apiData.projectsInfo?.slice(0, 4)?.map((entry, index)=> `<services-card
									text="${entry?.body}"
									title="${entry?.name}"
									src="${entry?.imageUrl}"
									class="services-card-${index}"
									> </services-card>`).join("")
					})
					.join("")
			);

			elementSelector(
				9,
				dataSlice(1)
					?.map((apiData, i) => {
						return apiData.projectsInfo?.map((entry, index)=> `<gallery-card
						pgcimage="${entry?.imageUrl}"
						title="${entry?.name}"
						area="${entry?.loc}"
						flats="${entry?.size}"
						price="${entry?.price}"
						projectname="${entry?.marketedby}"
						prname="${entry?.name}"
						class="gallery-card-${index}"
									> </gallery-card>`).join("")
					})
					.join("")
			);

			elementSelector(
				10,
				null,
				dataSlice(1)
					?.map((apiData, i) => {
						return apiData.projectsInfo?.slice(0, 3)?.map((entry, index)=> `<explore-card
						city="${entry.city}"
						price="${entry.price}"
						rating="${entry.rating}"
						reviews="${entry.totalReviews}"
						count="${entry.forSaleCount}"
						class="explore-card-${index}"
									> </explore-card>`).join("")
					})
					.join("")
			);

			elementSelector(
				11,
				dataSlice(1)
					?.map((apiData, i) => {
						return apiData.projectsInfo?.slice(0, 4)?.map((entry, index)=> `<owner-property-card
						opcimg="${entry.imageUrl}"
						status="${entry.status}"
						location="${entry.loc}"
						flats="${entry.size}"
						price="${entry.price}"
						class="owner-card-${index}"
					
									> </owner-property-card>`).join("");
					})
					.join("")
			);

			elementSelector(
				12,
				dataSlice(1)
					?.map((apiData, i) => {
						return apiData.projectsInfo?.slice(0, 4)?.map((entry, index)=> `<advice-card
						title="${entry.name}"
						description="${entry.body}"
						ac-image-part="logo-image-${index}"
						content="dynamic-content-${index}"
						class="advice-card-${index}"
									> </advice-card>`).join("")
					})
					.join("")
			);

			elementSelector(
				13,
				dataSlice(1)
					?.map((apiData, i) => {
						return apiData.projectsInfo?.slice(0, 3)?.map((entry, index)=> `<guide-card
						title="${entry.name}"
						srconetext="${entry.body}"
						srctwotext="${entry.body}"
						gc-show-videoblock="${index === 0 && "grid"}"
						gc-show-insightsblock="${index === 1 && "grid"}"
						gc-show-updatesblock="${index === 2 && "block"}"
						gc-show-updates-image-src="${entry.imageUrl}
						gcbtn="${index === 2 ? "block" : ""}"
						class="guide-card-${index}"
									> </guide-card>`).join("")
					})
					.join("")
			);

			elementSelector(
				14,
				dataSlice(1)
					?.map((apiData, index) => {
						return `${apiData?.propertysnapshot[0].description}`;
					})
					.join("")
			);

			elementSelector(
				15,
				dataSlice(1)
					?.map((apiData, index) => {
						
						return apiData.propertysnapshot.map(entry => `<div
						class="main-section-hyd-prop-snapshot-content_total-projects-1">
						<span>${entry.totalCount}</span><br/> 
						<span>${entry.budgetInfo}</span><br/> 
						<span>${entry.city}</span></div>`).join("")
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
								`<li class="nph-citynames nph-citynames-${index}"> ${city.name} </li>`
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
								'<div class="rc-heads-top">' +
								'<span class="">' +
								"</span>" +
								catergoryheading.name +
								"</div>"
						)
						.join("");
				})}`
			);

			const cheads = shadow.querySelectorAll(".rc-heads-top");
			const cheadsContainer = shadow.querySelector(
				".main-section-recommended-catergories"
			);

			cheads.forEach(function (categories, index) {
				const catergoryDetailsEl = shadow.querySelector(
					".main-section-recommended-catergories-details"
				);
				categories.addEventListener("mouseenter", function () {
					categories
						.querySelector("span")
						.classList.add("rc-heads-top-underline");
				});
				categories.addEventListener("mouseleave", function () {
					categories
						.querySelector("span")
						.classList.remove("rc-heads-top-underline");
				});

				function categoryNamesInnerText(index) {
					return `${dataSlice(1).map((categorynames) =>
						categorynames?.recommended?.content[index].selection
							.map((category) => {
								return "<div>" + category.name + "</div>";
							})
							.join("")
					)}`;
				}
				catergoryDetailsEl.innerHTML = categoryNamesInnerText(0);
				categories.addEventListener("click", function () {
					catergoryDetailsEl.innerHTML = categoryNamesInnerText(index);
				});
			});

			shadow.querySelector('.main-section-showcase__images__contact-btn-slot').insertAdjacentHTML('afterbegin', 
			dataSlice(1).map(data => `${data.extras.btnText[0]}`))

			shadow.querySelector('.main-section-featured__title').insertAdjacentHTML('beforeend', 
			dataSlice(1).map(data => `${(JSON.parse(JSON.stringify(data.extras.seeAllProjectsArrow)))}`))			
			shadow.querySelector('.hnp-container-title-block').insertAdjacentHTML('beforeend', 
			dataSlice(1).map(data => `${(JSON.parse(JSON.stringify(data.extras.seeAllProjectsArrow)))}`))
			shadow.querySelector('.popular-cities-first-block-title').innerHTML =  
			dataSlice(1).map(data => `${data.extras.sectionHeads[0]}`)
			shadow.querySelector('.main-section-post-your-property-btn').innerHTML = 
			dataSlice(1).map(data => `${(JSON.parse(JSON.stringify(data.extras.postProperty)))}`)
			shadow.querySelector('.nph-cities-title').innerHTML = 
			dataSlice(1).map(data => `${data.extras.sectionHeads[1]}`)
			shadow.querySelector('.home-icon-text').innerHTML = 
			dataSlice(1).map(data => `${data.extras.heroSearchIconsText[0]}`)
			shadow.querySelector('.budget-icon-text').innerHTML = 
			dataSlice(1).map(data => `${data.extras.heroSearchIconsText[1]}`)
			shadow.querySelector('.section-holder-search-btn-text').innerHTML = 
			dataSlice(1).map(data => `${data.extras.btnText[1]}`)
			shadow.querySelector('.main-section-search-holder__image').childNodes[1].attributes.src.value = dataSlice(1).map(data => `${data.hero.heroImage}`)
			shadow.querySelector('.main-section-showcase__images__contact-btn-slot-image').attributes.src.value = dataSlice(1).map(data => `${data.hero.heroImage}`)
	
		
			shadow.querySelector('arrow-right').shadowRoot.querySelector('span').addEventListener('click', () => {

			window.location.href = '/property'
		})
		
		}

		

		function changeBg(shadow) {
			const fadeImages = shadow.querySelector(".main-section-showcase__images");

;
			fadeImages.style.backgroundImage = "url('https://properties-search.s3.ap-south-1.amazonaws.com/assets/showcase1.jpg')";
		}


		setInterval(changeBg(this.shadowRoot), 2000);


		scrollObserver(
			".main-section-project-gallery",
			"animate-section-project-gallery",
			this.shadowRoot
		);
		scrollObserver(
			".main-section-showcase",
			"animate-section-showcase",
			this.shadowRoot
		);

		
		scrollObserver(
			".featured-card-0",
			"animate-section-featured-card-0",
			this.shadowRoot
		);
		scrollObserver(
			".featured-card-1",
			"animate-section-featured-card-1",
			this.shadowRoot
		);
		scrollObserver(".hnp-card-0", "animate-section-hp-card-0", this.shadowRoot);
		scrollObserver(".hnp-card-1", "animate-section-hp-card-1", this.shadowRoot);
		scrollObserver(
			".image-overlay-text-card-0",
			"animate-section-image-overlay-card-0",
			this.shadowRoot
		);
		scrollObserver(
			".image-overlay-text-card-1",
			"animate-section-image-overlay-card-1",
			this.shadowRoot
		);
		scrollObserver(
			".image-overlay-text-card-2",
			"animate-section-image-overlay-card-2",
			this.shadowRoot
		);
		scrollObserver(
			".image-overlay-text-card-3",
			"animate-section-image-overlay-card-3",
			this.shadowRoot
		);
		scrollObserver(
			".services-card-0",
			"animate-section-services-card-0",
			this.shadowRoot
		);
		scrollObserver(
			".services-card-1",
			"animate-section-services-card-1",
			this.shadowRoot
		);
		scrollObserver(
			".services-card-2",
			"animate-section-services-card-2",
			this.shadowRoot
		);
		scrollObserver(
			".services-card-3",
			"animate-section-services-card-3",
			this.shadowRoot
		);
		scrollObserver(
			".gallery-card-0",
			"animate-section-gallery-card-0",
			this.shadowRoot
		);
		scrollObserver(
			".gallery-card-1",
			"animate-section-gallery-card-1",
			this.shadowRoot
		);
		scrollObserver(
			".gallery-card-2",
			"animate-section-gallery-card-2",
			this.shadowRoot
		);
		scrollObserver(
			".gallery-card-3",
			"animate-section-gallery-card-3",
			this.shadowRoot
		);
		scrollObserver(
			".gallery-card-4",
			"animate-section-gallery-card-4",
			this.shadowRoot
		);
		scrollObserver(
			".gallery-card-5",
			"animate-section-gallery-card-5",
			this.shadowRoot
		);
		scrollObserver(
			".explore-card-0",
			"animate-section-explore-card-0",
			this.shadowRoot
		);
		scrollObserver(
			".explore-card-1",
			"animate-section-explore-card-1",
			this.shadowRoot
		);
		scrollObserver(
			".explore-card-2",
			"animate-section-explore-card-2",
			this.shadowRoot
		);
		scrollObserver(
			".owner-card-0",
			"animate-section-owner-card-0",
			this.shadowRoot
		);
		scrollObserver(
			".owner-card-1",
			"animate-section-owner-card-1",
			this.shadowRoot
		);
		scrollObserver(
			".owner-card-2",
			"animate-section-owner-card-2",
			this.shadowRoot
		);
		scrollObserver(
			".owner-card-3",
			"animate-section-owner-card-3",
			this.shadowRoot
		);
		scrollObserver(
			".advice-card-0",
			"animate-section-owner-card-0",
			this.shadowRoot
		);
		scrollObserver(
			".advice-card-1",
			"animate-section-owner-card-1",
			this.shadowRoot
		);
		scrollObserver(
			".advice-card-2",
			"animate-section-owner-card-2",
			this.shadowRoot
		);
		scrollObserver(
			".advice-card-3",
			"animate-section-owner-card-3",
			this.shadowRoot
		);
		scrollObserver(
			".guide-card-0",
			"animate-section-guide-card-0",
			this.shadowRoot
		);
		scrollObserver(
			".guide-card-1",
			"animate-section-guide-card-1",
			this.shadowRoot
		);
		scrollObserver(
			".guide-card-2",
			"animate-section-guide-card-2",
			this.shadowRoot
		);
		scrollObserver(
			".main-section-hyd-prop-snapshot-content_total-projects",
			"animate-section-snapshot",
			this.shadowRoot
		);
		scrollObserver(
			".main-section-post-your-property-btn",
			"animate-section-pop-btn",
			this.shadowRoot
		);
		scrollObserver(
			".nph-citynames-list",
			"animate-section-citynames",
			this.shadowRoot
		);
		scrollObserver(
			".main-section-browse-projects-project-names",
			"animate-section-cityprojects",
			this.shadowRoot
		);
		scrollObserver(
			".main-section-recommended-catergories",
			"animate-section-rc-names",
			this.shadowRoot
		);
		scrollObserver(
			".main-section-recommended-catergories-details",
			"animate-section-rc-details",
			this.shadowRoot
		);
		scrollObserver(
			".side-icon-text-card-0",
			"animation-side-icon-text-card-0",
			this.shadowRoot
		);
		scrollObserver(
			".side-icon-text-card-1",
			"animation-side-icon-text-card-1",
			this.shadowRoot
		);
		scrollObserver(
			".side-icon-text-card-2",
			"animation-side-icon-text-card-2",
			this.shadowRoot
		);
		scrollObserver(
			".side-icon-text-card-3",
			"animation-side-icon-text-card-3",
			this.shadowRoot
		);
		scrollObserver(
			".side-icon-text-card-4",
			"animation-side-icon-text-card-4",
			this.shadowRoot
		);
	}

	back() {
		this.dispatchEvent(this.#goHomeEvent);
	}
}
