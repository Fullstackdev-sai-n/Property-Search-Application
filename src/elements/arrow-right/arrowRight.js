import html from "./arrow-right.html";
import css from "./arrow-right.css";
import { setupShadow } from "../../utils/helper";


class ArrowRight extends HTMLElement {

   constructor() {
      super();
      setupShadow(this, html, css);  
    }
   async connectedCallback(){
   
this.shadowRoot.querySelector('.mg-arrow-right').attributes.part.value = this.getAttribute('arrow-right-part')
this.shadowRoot.querySelector('.mg-arrow-right-wrapper').addEventListener('click', () => {
   console.log('i am clicked', navigate)

   
})
  
   }
}

customElements.define('arrow-right', ArrowRight)