class SideIconText extends HTMLElement {
    async connectedCallback() {
        let res = await fetch( './templates/elements/side-icon-text-template.html')
        this.attachShadow( { mode: 'open' } )
            .innerHTML = await res.text()
            this.shadowRoot.querySelector('.icontext-side-icon').attributes.part.value = this.getAttribute('side-icon');
            this.shadowRoot.querySelector('.icontext-main-text').innerHTML = this.getAttribute('it-text');
            this.shadowRoot.querySelector('.icontext-caption-text').innerHTML = this.getAttribute('it-caption');
          }
   
}

customElements.define('sideicon-with-text', SideIconText);
