			const jsonData = fetch("./dynamicData.json")
				.then((res) => res.json())
				.then((result) => result)
				.then((res) => fetchResponse(res));

			function fetchResponse(data) {
				if (!data) return;

				document.querySelector(".main-section-search-hyd__cards").innerHTML =
					data
						.slice(0, 4)
						?.map(
							(apiData) => `
						<properties-listed-card
						hydimg-part="${apiData?.propertiesListed?.image}"
						info="${apiData?.propertiesListed?.text}"
						frwdtxt="${apiData?.propertiesListed?.arrowText}">
					</properties-listed-card>`
						)
						.join("");

				document.querySelector(".rc-title").insertAdjacentHTML(
					"afterend",
					data
						.slice(0, 6)
						.map((apiData, index) => {
							console.log(index + 1);
							if (index === 0) {
								Array.from(
									document.querySelectorAll(
										".main-section-recommended-catergories-details"
									)
								).map((el) =>
									el.insertAdjacentHTML(
										"beforeend",
										data
											.slice(index, index + 1)[0]
											.recommended.topBlogs.heads.details.map(
												(item, index) =>
													"<div class='main-section-recommended-catergories-details-content'>" +
													item.value
														.map((el) => "<div>" + el + "</div>")
														.join("") +
													"</div>"
											)
											.join("")
									)
								);
							}
							return (
								'<li class="rc-heads-top">' +
								apiData.recommended.topBlogs.heads.heading +
								"</li>"
							);
						})
						.join("")
				);

				const cheads = document.querySelectorAll(".rc-heads-top");

				cheads.forEach(function (cbox, index) {
					cbox.addEventListener("click", () => {
						if (index === 0) {
							const cdetails = document.querySelectorAll(
								".main-section-recommended-catergories-details"
							);
							cdetails.forEach(function (details, i) {
								details.style.display = "grid";
							});
						}
					});
				});

				// Handpicked New Project Launches in Hyderabad

				console.log(document.querySelector(".hnp-categories-block").innerHTML)

				document.querySelector(".hnp-categories-block").innerHTML =
					data
						?.slice(0, 4)
						?.map((apiData, index) => {
							return `<sideicon-with-text
						side-icon="before-icon-${index}"
						it-text="${apiData.launchText}"
						it-caption="${apiData.launchCaption}"				
						> </sideicon-with-text>`;
						})
						.join("");

				document.querySelector(".hnp-diplay-cards-block").innerHTML =
					data
						?.slice(0, 2)
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
						.join("");


				// Featured Projects

				document.querySelector(".main-section-featured__content").innerHTML =
					data
						?.slice(0, 2)
						?.map((apiData, index) => {
							return `<featured-card title="${apiData.name}"
						by="${apiData.by}"
						loc="${apiData.loc}"
						marketed="${apiData.marketedby}"
						flats="${apiData.size}"
						price="${apiData.price}"> </featured-card>`;
						})
						.join("");

				// We've got properties for everyone

				document.querySelector(".main-section-image-cards-wrapper").innerHTML =
					data
						?.slice(0, 4)
						?.map((apiData, index) => {
							return `<image-overlay-text-card 
									number="${apiData.count}"
									title="${apiData.name}"
									imageurl="url(${apiData.imageUrl})"
									> </image-overlay-text-card>`;
						})
						.join("");

				// Property Services

				document.querySelector(
					".main-section-property_services_cards-wrapper"
				).innerHTML = data
					?.slice(0, 4)
					?.map((apiData, index) => {
						return `<services-card
									text="${apiData.body}"
									title="${apiData.name}"
									src="${apiData.imageUrl}"
									> </services-card>`;
					})
					.join("");

				// New Project Gallery

				document.querySelector(
					".main-section-new-project-gallery-cards"
				).innerHTML = data
					?.slice(0, 6)
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
					.join("");

				// Popular Localities

				document
					.querySelector(".main-section-popular-cities-cards-wrapper")
					.insertAdjacentHTML(
						"beforeend",
						data
							?.slice(0, 3)
							?.map((apiData, index) => {
								return `<explore-card
						city="${apiData.loc}"
						price="${apiData.price}"
						rating="${apiData.rating}"
						reviews="${apiData.count}"
						count="${apiData.count}"
									> </explore-card>`;
							})
							.join("")
					);

				// Exclusive Owner Properties in Hyderabad

				document.querySelector(
					".main-section-owner-properties-cards"
				).innerHTML = data
					?.slice(0, 4)
					?.map((apiData, index) => {
						return `<owner-property-card
						opcimg="${apiData.imageUrl}"
						status="${apiData.status}"
						location="${apiData.loc}"
						flats="${apiData.size}"
						price="${apiData.price}"
					
									> </owner-property-card>`;
					})
					.join("");

				// Advice & Tools

				document.querySelector(
					".main-section-advice-tools__card-wrapper"
				).innerHTML = data
					?.slice(0, 4)
					?.map((apiData, index) => {
						return `<advice-card
						title="${apiData.name}"
						description="${apiData.body}"
						ac-image-part="logo-image-${index}"
						content="dynamic-content-${index}"
									> </advice-card>`;
					})
					.join("");

				// Your Real Estate Guide

				document.querySelector(
					".main-section-real-estate-guide-cards_wrapper"
				).innerHTML = data
					?.slice(0, 3)
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
					.join("");


				// Hyderabad Property Snapshot

				document.querySelector(
					".main-section-hyd-prop-snapshot-content_desc"
				).innerHTML = data
					?.slice(0, 1)
					?.map((apiData, index) => {
						return `${apiData?.propertysnapshot?.description}`;
					})
					.join("");

				document.querySelector(
					".main-section-hyd-prop-snapshot-content_total-projects"
				).innerHTML = data
					?.slice(0, 4)
					?.map((apiData, index) => {
						return `<div
						class="main-section-hyd-prop-snapshot-content_total-projects-1">
						<span>${apiData?.propertysnapshot?.totalCount}</span><br/> 
						<span>${apiData?.propertysnapshot?.budgetInfo}</span><br/> 
						<span>${apiData?.propertysnapshot?.city}</span></div>`;
					})
					.join("");


				// post-your-property


				document.querySelector(
					".main-section-post-your-property-text"
				).innerHTML = data
					?.slice(0, 1)
					?.map((apiData, index) => {
						return `${JSON.parse(JSON.stringify(apiData.postProperty))}`;
					})
					.join("");

				// Browse Residential Projects in Top 8 Cities


				document.querySelector(
					".main-section-post-your-property-text"
				).innerHTML = data
					?.slice(0, 1)
					?.map((apiData, index) => {
						return `${JSON.parse(JSON.stringify(apiData.postProperty))}`;
					})
					.join("");

					console.log(data.slice(0, 1).map((apiData, index) => apiData.topCities.map(list => '<li>' + list + '</li>')))
				document.querySelector(
					".main-section-browse-projects-cities"
				).innerHTML = `<ul> ${data.slice(0, 1).map((apiData, index) => apiData.topCities.map(list => '<li>' + list + '</li>').join(''))}</ul>`
				
				
				document.querySelector(
					".main-section-browse-projects-project-names"
				).innerHTML = data.slice(0, 1).map((apiData, index) => apiData.newprojects.content[0].selection.map(val => '<div>'+val.name+'</div>').join(""))

				
					document.querySelector(
					".main-section-browse-projects-cities"
				).innerHTML = `<ul> ${data.slice(0, 1).map((apiData, index) => apiData.topCities.map(list => '<li>' + list + '</li>').join(''))}</ul>`
							
			}

			function changeBg() {
				const fadeImages = document.querySelector(
					".main-section-showcase__images"
				);
				const images = [
					'url("./assets/showcase1.jpg")',
					'url("./assets/showcase2.jpg")',
					'url("./assets/showcase3.jpg")',
				];
				const bg = images[Math.floor(Math.random() * images.length)];
				fadeImages.style.backgroundImage = bg;
			}
			setInterval(changeBg, 2000);