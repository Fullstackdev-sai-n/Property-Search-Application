import html from "./custom-button.html";
import css from "./custom-button.css";
import { setupShadow } from "../../utils/helper";



class CustomButton extends HTMLElement {
    constructor() {
        super();
        setupShadow(this, html, css);  
      }

      connectedCallback(){
        this.shadowRoot.querySelector('.custom-btn-container').attributes.part.value = this.getAttribute('btnclass')
        
      }
  
 }
 
 customElements.define('custom-button', CustomButton)