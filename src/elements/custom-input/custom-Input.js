import html from "./custom-input.html";
import css from "./custom-input.css";
import { setupShadow } from "../../utils/helper";



class CustomInput extends HTMLElement {
    constructor() {
        super();
        setupShadow(this, html, css); 
        this.shadowRoot.querySelector('input').classList.add(this.getAttribute('inputClass'))
      }

      connectedCallback(){
        this.shadowRoot.querySelector('.custom-input-labels').innerText = this.getAttribute('label');
        this.shadowRoot.querySelector('input').attributes.type.value = this.getAttribute('type');
        this.shadowRoot.querySelector ('input').attributes.title.value = this.getAttribute('title');
        this.shadowRoot.querySelector('input').attributes.name.value = this.getAttribute('name');  ;     
        this.shadowRoot.querySelector('input').attributes.value.value = this.getAttribute('value');
        this.shadowRoot.querySelector('input').attributes.placeholder.value = this.getAttribute('placeholder');
        
      this.getAttribute('required') ? this.shadowRoot.querySelector('.custom-input-labels').classList.add('required') : ''
      
   
      
      }
  
 }
 
 customElements.define('custom-input', CustomInput)