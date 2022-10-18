class SectionHeading extends HTMLElement {
    async connectedCallback() {
        let res = await fetch( './templates/elements/custom-heading-template.html')
        this.attachShadow( { mode: 'open' } )
            .innerHTML = await res.text()
            this.shadowRoot.querySelector('.heading').innerHTML = this.getAttribute('heading');
            this.shadowRoot.querySelector('.heading').attributes.part.value = this.getAttribute('beforecolor-part');

          }
   
}

customElements.define('section-heading', SectionHeading);
