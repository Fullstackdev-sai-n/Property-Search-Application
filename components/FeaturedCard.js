let FeaturedEl = document.createElement("template");

FeaturedEl.innerHTML = `
<style>

.main-section-featured__content__card {
	width: auto;
	border: 1px solid #d7d7d7;
    border-radius: 10px;
	display: grid;
	grid-template-rows: 1fr 0.2fr;
}

.main-section-featured__content__card__text {
	display: grid;
	grid-template-columns: 0.4fr 1fr 0.6fr;
	place-items: center;
	padding: 20px 20px;

}


.featured-img {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
}

.logo-image {
	width: 80%;
}

.main-section-featured__content__card__text__desc_name {
	font: var(--title-font);
	padding-bottom: 4px;
}
.main-section-featured__content__card__text__desc_name__by {
	font: var(--title-font);
	padding-bottom: 4px;
}

.main-section-featured__content__card__text__desc_marketed {
	font: var(--description-font)
	
}

.price-details{
	margin-top:-30px;
}
.price-details > div:nth-child(1){
	margin-bottom:5px;
	text-align: end;
}
.price-details > div:nth-child(2){
	color: var(--text-primary)
}

@media (max-width: 1100px) {
	.price-details > div:nth-child(2){
		text-align: end;
	}
}


</style>

<div class="main-section-featured__content__card">
<img src="./assets/showcase1.jpg" class='featured-img'/>					
<div class="main-section-featured__content__card__text">
						<img class='logo-image' src='./assets/payrent.jpg' alt=''/>
						<div class="main-section-featured__content__card__text__desc">
						<div class="main-section-featured__content__card__text__desc_name">Sri Aditya Squares Ornate</div>
						<div class="main-section-featured__content__card__text__desc_by">by Sri Aditya Squares</div>
						<div class="main-section-featured__content__card__text__desc_loc">Kollur, Hyderabad</div>
						<div class="main-section-featured__content__card__text__desc_marketed">Marketed by Sri Aditya Squares</div>
						</div>
						<div class='price-details'>
						<div>
						2, 3 BHK Flats
						</div>
						<div>
						<b>₹ 40.9 Lac</b> <small>onwards</small>
						</div>
						</div>
					</div>
				</div>
`;

customElements.define(
	"featured-card",
	class extends HTMLElement {
		constructor() {
			super();
			const content = FeaturedEl.content;
			this.attachShadow({ mode: "open" });
			this.shadowRoot.appendChild(content.cloneNode(true));
		}
	}
);
