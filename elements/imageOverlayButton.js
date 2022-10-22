class ImageOverlayButton extends HTMLElement {
    async connectedCallback() {
        let res = await fetch( './templates/elements/image-overlay-button-template.html')
        this.attachShadow( { mode: 'open' } )
            .innerHTML = await res.text()
            this.shadowRoot.querySelector('.iob-image').attributes[1].value = this.getAttribute('iob-image');
        
        }
   
}

customElements.define('image-overlay-play-button', ImageOverlayButton);
