class ArrowRight extends HTMLElement {
   async connectedCallback(){
    let res = await fetch( './templates/elements/arrow-right-template.html')
    this.attachShadow( { mode: 'open' } )
        .innerHTML = await res.text()
this.shadowRoot.querySelector('.mg-arrow-right').attributes.part.value = this.getAttribute('arrow-right-part')
  
   }
}

customElements.define('arrow-right', ArrowRight)