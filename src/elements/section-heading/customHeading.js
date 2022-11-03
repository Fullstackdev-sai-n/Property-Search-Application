import html from "./section-heading.html";
import css from "./section-heading.css";
import { setupShadow } from "../../utils/helper";



class SectionHeading extends HTMLElement {
    constructor() {
        super();
        setupShadow(this, html, css);  
      }

    async connectedCallback() {
       
            this.shadowRoot.querySelector('.heading').innerHTML = this.getAttribute('heading');
            this.shadowRoot.querySelector('.heading').attributes.part.value = this.getAttribute('beforecolor-part');

          }
   
}

customElements.define('section-heading', SectionHeading);
