import html from "./about-page.html";
import { setupShadow } from "../../utils/helper";


export class AboutPage extends HTMLElement {

  constructor() {
    super();
    setupShadow(this, html);
  }

  async connectedCallback() {
    this.shadowRoot.querySelector('p').style.background = 'red'
  
  }

}