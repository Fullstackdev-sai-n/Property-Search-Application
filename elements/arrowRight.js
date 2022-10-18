class ArrowRight extends HTMLElement {
   async connectedCallback(){
    let res = await fetch( './templates/elements/arrow-right-template.html')
    this.attachShadow( { mode: 'open' } )
        .innerHTML = await res.text()

  
   }
}

customElements.define('arrow-right', ArrowRight)