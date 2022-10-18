class ExploreCard extends HTMLElement {

    async connectedCallback() {
      let res = await fetch( './templates/components/explore-card-template.html')
      this.attachShadow( { mode: 'open' } )
          .innerHTML = await res.text()
          this.shadowRoot.querySelector('.explore-card-city').innerHTML = this.getAttribute('city');
          this.shadowRoot.querySelector('.explore-card-price').innerHTML = this.getAttribute('price');
          this.shadowRoot.querySelector('.rating').innerHTML = this.getAttribute('rating');
          this.shadowRoot.querySelector('.review').innerHTML = this.getAttribute('reviews')
          this.shadowRoot.querySelector('.explore-card-count').innerText = this.getAttribute('count')
          
    }
  }
  
  customElements.define('explore-card', ExploreCard);
  