import html from "./sideicon-with-text.html";
import css from "./sideicon-with-text.css";
import { setupShadow } from "../../utils/helper";

class SideIconText extends HTMLElement {

    constructor() {
        super();
        setupShadow(this, html, css);  
      }
    async connectedCallback() {
            this.shadowRoot.querySelector('.icontext-side-icon').attributes.part.value = this.getAttribute('side-icon');
            this.shadowRoot.querySelector('.icontext-main-text').innerHTML = this.getAttribute('it-text');
            this.shadowRoot.querySelector('.icontext-caption-text').innerHTML = this.getAttribute('it-caption');

           
          }
   
}

customElements.define('sideicon-with-text', SideIconText);
