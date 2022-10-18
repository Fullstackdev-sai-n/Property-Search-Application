class AdviceCard extends HTMLElement {

  async connectedCallback() {
    let res = await fetch( './templates/components/advice-card-template.html')
    this.attachShadow( { mode: 'open' } )
        .innerHTML = await res.text()
        this.shadowRoot.querySelector('.advice-text-title').innerHTML = this.getAttribute('title');
        this.shadowRoot.querySelector('.advice-text-desc').innerHTML = this.getAttribute('description');
        this.shadowRoot.querySelector('.advice-card').attributes.part.value = this.getAttribute('content');
        this.shadowRoot.querySelector('.advice-image').attributes.part.value = this.getAttribute('ac-image-part')
        
  }
}

customElements.define('advice-card', AdviceCard);
