class OwnerPropertyCard extends HTMLElement {
    async connectedCallback() {
      let res = await fetch( './templates/components/owner-property-card-template.html')
      this.attachShadow( { mode: 'open' } )
          .innerHTML = await res.text()
          this.shadowRoot.querySelector('.opc-flats').innerHTML = this.getAttribute('flats');
          this.shadowRoot.querySelector('.opc-price').innerHTML = this.getAttribute('price');
          this.shadowRoot.querySelector('.opc-location').innerHTML = this.getAttribute('location');
          this.shadowRoot.querySelector('.opc-status').innerHTML = this.getAttribute('status');
          this.shadowRoot.querySelector('.opc-image').attributes[0].value = this.getAttribute('opcimg');
          this.shadowRoot.querySelector('.opc-card').addEventListener('mouseover', () => {
            this.shadowRoot.querySelector('.contact-btn-blk').style.display = 'block';
            this.shadowRoot.querySelector('.opc-image').style.transform = 'scale(1.1)';	
          })
      
          this.shadowRoot.querySelector('.opc-card').addEventListener('mouseout', () => {
            this.shadowRoot.querySelector('.contact-btn-blk').style.display = 'none';
            this.shadowRoot.querySelector('.opc-image').style.transform = 'scale(1)';
          })
    }
  }
  
  customElements.define('owner-property-card', OwnerPropertyCard);
