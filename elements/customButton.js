class CustomButton extends HTMLElement {
    async connectedCallback(){
     let res = await fetch( './templates/elements/custom-button-template.html')
     this.attachShadow( { mode: 'open' } )
         .innerHTML = await res.text()
 
   
    }
 }
 
 customElements.define('custom-button', CustomButton)