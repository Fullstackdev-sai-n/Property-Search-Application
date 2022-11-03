import html from "./custom-button.html";
import css from "./custom-button.css";
import { setupShadow } from "../../utils/helper";



class CustomButton extends HTMLElement {
    constructor() {
        super();
        setupShadow(this, html, css);  
      }
  
 }
 
 customElements.define('custom-button', CustomButton)